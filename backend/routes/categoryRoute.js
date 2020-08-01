const express = require("express");
const route = express.Router();

const { addCategory } = require("../controllers/categoryContoller");

route.post("/", addCategory);

route.get("/", (req, res) => {
  res.send("Hello");
});

module.exports = route;
