const { createMovie } = require("../services/movieService");
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

module.exports = {
  addMovie,
};
