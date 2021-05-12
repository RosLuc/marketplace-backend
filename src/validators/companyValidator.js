const { Joi, Segments, celebrate, CelebrateError } = require('celebrate');
//59.944.743/0001-62
const CreateBody = celebrate({
    [Segments.BODY]: Joi.object().keys({
        fantasy_name: Joi.string().regex(/[a-zA-Z]{2}/).required(),
        company_name: Joi.string().regex(/[a-zA-Z]{2}/).required(),
        cnpj: Joi.string().regex(/[0-9]{2,2}\.[0-9]{3,3}\.[0-9]{3,3}\/[0-9]{4,4}-[0-9]{2,2}/).required(),
        phone: Joi.string().regex(/^[0-9]{11,11}$/).required(),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^(?=(?:.*?[0-9]){1})(?=(?:.*?[a-zA-Z!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]{8}/).required(),
        confirm_password: Joi.string().valid(Joi.ref('password')).messages({ 'any.only': 'Passwords does not match' }).required(),
  })
});

const UpdateBody = celebrate({
    [Segments.BODY]: Joi.object().keys({
        fantasy_name: Joi.string().regex(/[a-zA-Z]{2}/),
        company_name: Joi.string().regex(/[a-zA-Z]{2}/),
        cnpj: Joi.string().regex(/[0-9]{2,2}\.[0-9]{3,3}\.[0-9]{3,3}\/[0-9]{4,4}-[0-9]{2,2}/),
        phone: Joi.string().regex(/^[0-9]{11,11}$/),
        email: Joi.string().email(),
        password: Joi.string().regex(/^(?=(?:.*?[0-9]){1})(?=(?:.*?[a-zA-Z!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]{8}/),
        confirm_password: Joi.string().valid(Joi.ref('password')).messages({ 'any.only': 'Passwords does not match' }),
  })
});

module.exports = {
  CreateBody,
  UpdateBody
}