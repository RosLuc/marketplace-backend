const { Joi, Segments, celebrate, CelebrateError } = require('celebrate');

const CreateBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    cep: Joi.string().regex(/^[0-9]{8}/).required(),
    number: Joi.number().min(0).required(),
    uf: Joi.string().regex(/^[a-zA-Z]/).required(),
    user_id: Joi.number().min(0),
    company_id: Joi.number().min(0),
    city: Joi.string().regex(/^[a-zA-Z]/).required(),
    address: Joi.string().required(),
    comp: Joi.string().allow("", null),
    district: Joi.string().required()
  })
});

const UpdateBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    cep: Joi.string().regex(/^[0-9]{8}/),
    number: Joi.number().min(0),
    uf: Joi.string().regex(/^[a-zA-Z]/),
    city: Joi.string().regex(/^[a-zA-Z]/),
    address: Joi.string(),
    comp: Joi.string().allow("", null),
    district: Joi.string()
  })
});

module.exports = {
  CreateBody,
  UpdateBody
};