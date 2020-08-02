const {
  createMovie,
  readMovies,
  readMovie,
  removeMovie,
  updateMovie,
} = require("../services/movieService");
const { validate } = require("../models/movieModel");

const addMovie = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const movie = await createMovie(req.body);
    res.send(movie);
  } catch (exception) {
    res.status(500).send(exception.message);
  }
};

const displayMovies = async (req, res) => {
  try {
    const movies = await readMovies();
    res.send(movies);
  } catch (error) {
    console.log(error.message);
  }
};

const modifyMovie = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const movie = await updateMovie(req.params.id, req.body);
    if (!movie) return res.status(404).send("Movie was not found");
    res.send(movie);
  } catch (error) {
    console.log(error.message);
  }
};

const displayOneMovie = async (req, res) => {
  try {
    const movie = await readMovie(req.params.id);
    if (!movie) return res.status(404).send("Movie was not found");
    res.send(movie);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteOneMovie = async (req, res) => {
  try {
    const movie = await removeMovie(req.params.id);
    if (!movie) return res.status(404).send("Movie was not found");
    res.send(movie);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addMovie,
  displayMovies,
  modifyMovie,
  displayOneMovie,
  deleteOneMovie,
};
