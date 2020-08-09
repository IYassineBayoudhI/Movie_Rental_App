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
  const category = await Category.findById(movie.category);
  if (!category) return console.log("Invalid Category ID");
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

const getMovies = async () => {
  const result = await Movie.find().sort("name");
  return result;
};

const putMovie = async (id, updatedMovie) => {
  try {
    const movie = await Movie.findById(id);
    if (!movie) return console.log("Invalid Movie ID");
    const category = await Category.findById(updatedMovie.category);
    if (!category) return console.log("Invalid Category ID");
    movie.title = updatedMovie.title;
    movie.description = updatedMovie.description;
    movie.release_year = updatedMovie.release_year;
    movie.language = updatedMovie.language;
    movie.rental_duration = updatedMovie.rental_duration;
    movie.rental_rate = updatedMovie.rental_rate;
    movie.rate = updatedMovie.rate;
    movie.isRented = updatedMovie.isRented;
    movie.category = category;
    console.log(movie.category);
    return await movie.save();
  } catch (error) {
    console.log("hello", error.message);
  }
};

const getMovie = async (id) => {
  try {
    const movie = await Movie.findById(id);
    return movie;
  } catch (error) {
    console.log(error.message);
  }
};

const deleteMovie = async (id) => {
  try {
    const movie = await Movie.findOneAndRemove(id);
    return movie;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  postMovie,
  getMovies,
  putMovie,
  getMovie,
  deleteMovie,
};
