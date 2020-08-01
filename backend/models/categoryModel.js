const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 5,
    maxLength: 20,
    required: true,
  },
  description: {
    type: String,
    minLength: 0,
    maxLength: 255,
    required: true,
  },
  last_update: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model("Category", categorySchema);

function categoryValidate(category) {
  const schema = {
    name: Joi.string().min(5).max(20).required(),
    description: Joi.string().min(0).max(255).required(),
  };
  return Joi.validate(category, schema);
}

module.exports.Category = Category;
module.exports.validate = categoryValidate;
module.exports.categorySchema = categorySchema;
