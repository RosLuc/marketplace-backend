const { Joi, Segments, celebrate, CelebrateError } = require('celebrate');

const CreateBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    company_id: Joi.number().required(),
    name: Joi.string().required(),
    total_amount: Joi.number().required(),
    category: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    detail: Joi.string().required(),
    description: Joi.string(),
  })
});

const UpdateBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    total_amount: Joi.number(),
    category: Joi.string(),
    price: Joi.number(),
    image: Joi.string(),
    detail: Joi.string(),
    description: Joi.string(),
  })
});

module.exports = {
  CreateBody,
  UpdateBody
}