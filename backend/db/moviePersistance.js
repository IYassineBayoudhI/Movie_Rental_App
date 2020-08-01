const mongoose = require("mongoose");
const _ = require("lodash");
const config = require("config");

const { Movie } = require("../models/movieModel");
const { Category } = require("../models/categoryModel");

mongoose
  .connect(config.get("databaseConnection"), { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log("Something went Wrong", error));

const postMovie = async (movie) => {
  const category = await Category.findById(movie.categoryId);
  if (!category) return res.status(404).send("Invalid Category");
  const result = new Movie({
    title: movie.title,
    description: movie.description,
    release_year: movie.release_year,
    language: movie.language,
    rental_duration: movie.rental_duration,
    rental_rate: movie.rental_rate,
    rate: movie.rate,
    isRented: movie.isRented,
    category: {
      _id: category._id,
      name: category.name,
      description: category.description,
    },
  });
  return await result.save();
};

module.exports = {
  postMovie,
};
