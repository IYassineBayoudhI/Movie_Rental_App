const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const categorySchema = require("./categoryModel");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true,
  },
  description: {
    type: String,
    minLength: 10,
    maxLength: 1024,
    required: true,
  },
  release_year: {
    type: String,
    minLength: 4,
    maxLength: 4,
    required: true,
  },
  language: {
    type: String,
    maxLength: 10,
    minLength: 2,
    required: true,
  },
  rental_duration: {
    type: Number,
    min: 0,
    default: 0,
  },
  rental_rate: {
    type: Number,
    min: 0,
    max: 255,
    default: 0,
  },
  rate: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  isRented: {
    type: Boolean,
    default: true,
  },
  category: {
    type: categorySchema,
    required: false,
  },
  last_update: {
    type: Date,
    default: Date.now,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

function movieValidate(movie) {
  const schema = {
    title: Joi.string().min(2).max(100).required(),
    description: Joi.string().min(10).max(1024).required(),
    release_year: Joi.string().min(4).max(4).required(),
    language: Joi.string().min(2).max(10).required(),
    rental_duration: Joi.number().min(0),
    rental_rate: Joi.number().min(0).max(255),
    rate: Joi.number().min(0).max(10),
    isRented: Joi.boolean(),
    categoryId: Joi.objectId().required(),
  };
  return Joi.validate(movie, schema);
}

module.exports.Movie = Movie;
module.exports.validate = movieValidate;
