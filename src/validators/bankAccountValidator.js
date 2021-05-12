const { Joi, Segments, celebrate } = require('celebrate');

const CreateBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    company_id: Joi.number().min(0).required(),
    bank: Joi.string().required(),
    type_account: Joi.string().required(),
    is_legal_person: Joi.boolean().required(),
    cnpj_cpf: Joi.string().required(),
    name: Joi.string().regex(/[a-zA-Z]{2}/).required(),
    agency: Joi.number().min(0).required(),
    agency_digit: Joi.number().min(0).required(),
    number_account: Joi.number().min(0).required(),
    account_digit: Joi.number().min(0).required(),
  })
});

const UpdateBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    bank: Joi.string(),
    type_account: Joi.string(),
    is_legal_person: Joi.boolean(),
    cnpj_cpf: Joi.string(),
    name: Joi.string().regex(/[a-zA-Z]{2}/),
    agency: Joi.number().min(0),
    agency_digit: Joi.number().min(0),
    number_account: Joi.number().min(0),
    account_digit: Joi.number().min(0),
  })
});

module.exports = {
  CreateBody,
  UpdateBody
}