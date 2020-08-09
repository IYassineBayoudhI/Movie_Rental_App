const { postCategory, getCategories } = require("../db/categoryPersistance");

const createCategory = async (category) => {
  try {
    return await postCategory(category);
  } catch (exception) {
    console.log(exception.message);
  }
};

const readCategories = async () => {
  try {
    return await getCategories();
  } catch (exception) {
    console.log(exception.message);
  }
};

module.exports = {
  createCategory,
  readCategories,
};
