import React, { useState, createContext, useEffect } from "react";
import API from "../../utils/api";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    const categoriesData = async () => {
      await API.get("categories").then((result) => {
        if (isSubscribed) {
          setCategories(result.data);
        }
      });
    };
    categoriesData();
    return () => (isSubscribed = false);
  }, []);

  return (
    <CategoryContext.Provider value={[categories, setCategories]}>
      {props.children}
    </CategoryContext.Provider>
  );
};
