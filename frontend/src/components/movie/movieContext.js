import React, { useState, createContext, useEffect } from "react";
import API from "../../utils/api";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const moviesData = async () => {
      setLoading(true);
      const result = await API.get("movies");
      setMovies(result.data);
      setLoading(false);
    };
    moviesData();
  }, []);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
