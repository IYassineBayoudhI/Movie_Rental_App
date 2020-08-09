const express = require("express");
const route = express.Router();

const {
  addCategory,
  displayCategory,
} = require("../controllers/categoryContoller");

route.post("/", addCategory);

route.get("/", displayCategory);

module.exports = route;
