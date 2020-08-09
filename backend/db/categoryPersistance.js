const mongoose = require("mongoose");
const _ = require("lodash");
const config = require("config");

const { Category } = require("../models/categoryModel");

mongoose
  .connect(config.get("databaseConnection"), { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log("Something went Wrong", error));

const postCategory = async (category) => {
  const result = new Category(_.pick(category, ["name", "description"]));
  return await result.save();
};

const getCategories = async () => {
  const result = await Category.find().sort("name");
  return result;
};

module.exports = {
  postCategory,
  getCategories,
};
