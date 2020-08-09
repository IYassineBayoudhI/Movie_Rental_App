import Joi from "joi-browser";

const validate = (data) => {
  const schema = {
    title: Joi.string().required(),
    description: Joi.string().required(),
    release_year: Joi.number()
      .min(1980)
      .max(new Date().getFullYear())
      .required(),
    language: Joi.string().min(2).max(10).required(),
    categoryId: Joi.string().required(),
  };
  const result = Joi.validate(data, schema, {
    abortEarly: false,
  });
  if (!result.error) return {};
  const errors = {};
  for (let item of result.error.details) {
    errors[item.path[0]] = item.message;
  }
  return errors;
};

export default validate;
