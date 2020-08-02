const express = require("express");
const route = express.Router();

const {
  addMovie,
  displayMovies,
  modifyMovie,
  displayOneMovie,
  deleteOneMovie,
} = require("../controllers/movieController");

route.post("/", addMovie);
route.get("/", displayMovies);
route.get("/:id", displayOneMovie);
route.put("/:id", modifyMovie);
route.delete("/:id", deleteOneMovie);

module.exports = route;
