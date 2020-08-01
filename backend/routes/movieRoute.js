const express = require("express");
const route = express.Router();

const { addMovie } = require("../controllers/movieController");

route.post("/", addMovie);

route.get("/", (req, res) => {
  res.send("Hello");
});

module.exports = route;
