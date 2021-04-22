const { Joi, Segments, celebrate, CelebrateError } = require('celebrate');

const CreateBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    first_name: Joi.string().regex(/[a-zA-Z]{2}/).required(),
    last_name: Joi.string().regex(/[a-zA-Z]{2}/),
    cpf: Joi.string().required().regex(/[0-9]{11,11}/),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^(?=(?:.*?[0-9]){1})(?=(?:.*?[a-zA-Z!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]{8}/).required(),
    birth_date: Joi.date().iso(),
  })
});

module.exports = {
  CreateBody
}