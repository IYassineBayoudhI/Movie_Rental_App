import React, { useState, createContext, useEffect } from "react";
import API from "../../utils/api";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesData = async () => {
      const result = await API.get("movies");
      setMovies(result.data);
    };
    moviesData();
  }, []);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
