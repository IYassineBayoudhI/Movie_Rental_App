const {
  createCategory,
  readCategories,
} = require("../services/categoryService");
const { validate } = require("../models/categoryModel");

const addCategory = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const category = await createCategory(req.body);
    res.send(category);
  } catch (exception) {
    res.status(500).send(exception.message);
  }
};

const displayCategory = async (req, res) => {
  try {
    const categories = await readCategories();
    res.send(categories);
  } catch (exception) {
    res.status(500).send(exception.message);
  }
};

module.exports = {
  addCategory,
  displayCategory,
};
