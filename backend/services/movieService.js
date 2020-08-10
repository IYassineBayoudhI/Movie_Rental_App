const {
  postMovie,
  getMovies,
  putMovie,
  getMovie,
  deleteMovie,
  searchByCategory,
} = require("../db/moviePersistance");

const createMovie = async (movie) => {
  try {
    return await postMovie(movie);
  } catch (exception) {
    console.log(exception.message);
  }
};

const readMovies = async () => {
  try {
    return await getMovies();
  } catch (exception) {
    console.log(exception.message);
  }
};

const updateMovie = async (id, movie) => {
  try {
    return await putMovie(id, movie);
  } catch (error) {
    console.log(error.message);
  }
};

const readMovie = async (id) => {
  try {
    return await getMovie(id);
  } catch (error) {
    console.log(error.message);
  }
};

const removeMovie = async (id) => {
  try {
    return await deleteMovie(id);
  } catch (error) {
    console.log(error.message);
  }
};

const findByCategory = async (catName) => {
  try {
    return await searchByCategory(catName);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  createMovie,
  readMovies,
  updateMovie,
  readMovie,
  removeMovie,
  findByCategory,
};
