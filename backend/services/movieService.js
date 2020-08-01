const { postMovie } = require("../db/moviePersistance");

const createMovie = async (movie) => {
  try {
    return await postMovie(movie);
  } catch (exception) {
    console.log(exception.message);
  }
};

module.exports = {
  createMovie,
};
