const { Joi, Segments, celebrate, CelebrateError } = require('celebrate');

const CreateBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    user_id: Joi.number(),
    number_card: Joi.string().regex(/[0-9]/).required(),
    validate_date: Joi.date().required(),
    verify_number: Joi.string().required().regex(/[0-9]{3}/),
    cardholder: Joi.string().required().regex(/[a-zA-Z]{2}/)
  })
});

const UpdateBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    number_card: Joi.string().regex(/[0-9]/),
    validate_date: Joi.date(),
    verify_number: Joi.string().regex(/[0-9]{3}/),
    cardholder: Joi.string().regex(/[a-zA-Z]{2}/)
  })
});

module.exports = {
  CreateBody,
  UpdateBody
}