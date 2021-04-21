const { Joi } = require('express-validation');
const { cpf: cpfValidator } = require('cpf-cnpj-validator');

const Users = require('../model/Users');

function verifyEmailAlredyExist(email) {
  return Users.findOne({
    where: {
      email
    }
  }).then(user => {
    if (user) throw new Error('E-mail already in use');
  })
}

function verifyCPF(cpf) {
  if (!cpfValidator.isValid(cpf)) throw new Error('CPF is invalid');
}

const CreateBody = {
  body: Joi.object({
    first_name: Joi.string().regex(/[a-zA-Z]{2}/).required(),
    last_name: Joi.string().regex(/[a-zA-Z]{2}/),
    cpf: Joi.string().required().regex(/[0-9]{11,11}/).custom(value => verifyCPF(value)),
    email: Joi.string().email().custom(value => verifyEmailAlredyExist(value)).required(),
    password: Joi.string().regex(/^(?=(?:.*?[0-9]){1})(?=(?:.*?[a-zA-Z!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]{8}/).required(),
    birth_date: Joi.date().iso(),
  })
}

module.exports = {
  CreateBody
}