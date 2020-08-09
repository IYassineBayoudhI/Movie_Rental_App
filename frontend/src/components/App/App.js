import React from "react";
import { Route, Switch } from "react-router-dom";

import { MovieProvider } from "./../movie/movieContext";
import MoviesList from "../movie/moviesList";
import NavBar from "../navBar/navBar";
import AddMovie from "./../movie/addmovie";
import { CategoryProvider } from "./../category/categoryContext";
import EditMovie from "./../movie/editMovie";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main role='main' className='container'>
        <Switch>
          <Route exact path='/movies' component={MoviesList} />
          <CategoryProvider>
            <Route exact path='/movies/add' component={AddMovie} />
            <Route exact path='/movies/edit/:id' component={EditMovie} />
          </CategoryProvider>
        </Switch>
      </main>
    </MovieProvider>
  );
}

export default App;
