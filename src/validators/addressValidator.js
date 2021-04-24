const { Joi, Segments, celebrate, CelebrateError } = require('celebrate');

const CreateBody = celebrate({
    [Segments.BODY]: Joi.object().keys({
      cep: Joi.string.regex(/^[0-9]{5}-[0-9]{3}$/)
       
    })
  });