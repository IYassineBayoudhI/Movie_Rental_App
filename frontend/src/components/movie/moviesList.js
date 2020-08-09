import React, { useContext } from "react";
import { MovieContext } from "./movieContext";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className='container mt-3'>
      <Link to='/movies/add' className='btn btn-primary mb-1'>
        Add Movie
      </Link>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Release Year</th>
            <th scope='col'>Language</th>
            <th scope='col'>Category</th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m, index) => (
            <tr key={index}>
              <td>{m.title}</td>
              <td>{m.description}</td>
              <td>{m.release_year}</td>
              <td>{m.language}</td>
              <td>{m.category.name}</td>
              <td>
                <Link to={`/movies/edit/${m._id}`} className='btn btn-primary'>
                  Edit
                </Link>
              </td>
              <td>
                <Link className='btn btn-danger' to=''>
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesList;
