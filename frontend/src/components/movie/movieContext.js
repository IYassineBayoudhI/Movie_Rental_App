import React, { useState, createContext, useEffect } from "react";
import API from "../../utils/api";
import Page404 from "./../../Page404";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [httpStatusCode, setHttpStatusCode] = useState();

  useEffect(() => {
    const moviesData = async () => {
      const result = await API.get("movies");
      setHttpStatusCode(result.status);
      if (result.status === 200) {
        setMovies(result.data);
      }
    };
    moviesData();
  }, []);

  if (httpStatusCode === 404) {
    return <Page404 />;
  }

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
