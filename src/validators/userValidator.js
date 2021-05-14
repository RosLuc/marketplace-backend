const { Joi, Segments, celebrate, CelebrateError } = require('celebrate');

const CreateBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    first_name: Joi.string().regex(/^[a-zA-Z]{2}/).required(),
    last_name: Joi.string().regex(/^[a-zA-Z]{2}/),
    cpf: Joi.string().required().regex(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^(?=(?:.*?[0-9]){1})(?=(?:.*?[a-zA-Z!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]{8}/).required(),
    confirm_password: Joi.string().required().valid(Joi.ref('password')).messages({ 'any.only': 'Passwords does not match' }),
    birth_date: Joi.date().iso(),
  })
});

const UpdateBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    first_name: Joi.string().regex(/^[a-zA-Z]{2}/),
    last_name: Joi.string().regex(/^[a-zA-Z]{2}/),
    cpf: Joi.string().regex(/^[0-9]{11,11}$/),
    email: Joi.string().email(),
    password: Joi.string().regex(/^(?=(?:.*?[0-9]){1})(?=(?:.*?[a-zA-Z!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]{8}/),
    confirm_password: Joi.string().valid(Joi.ref('password')).messages({ 'any.only': 'Passwords does not match' }),
    birth_date: Joi.date().iso(),
  })
});

module.exports = {
  CreateBody,
  UpdateBody
}