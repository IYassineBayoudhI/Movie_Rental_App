import React, { useState, createContext, useEffect } from "react";
import API from "../../utils/api";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesData = async () => {
      const result = await API.get("categories");
      setCategories(result.data);
    };
    categoriesData();
  }, []);

  return (
    <CategoryContext.Provider value={[categories, setCategories]}>
      {props.children}
    </CategoryContext.Provider>
  );
};
