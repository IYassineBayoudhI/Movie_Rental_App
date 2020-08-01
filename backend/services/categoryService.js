const { postCategory } = require("../db/categoryPersistance");

const createCategory = async (category) => {
  try {
    return await postCategory(category);
  } catch (exception) {
    console.log(exception.message);
  }
};

module.exports = {
  createCategory,
};
