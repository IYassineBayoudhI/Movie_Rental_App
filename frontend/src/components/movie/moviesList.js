import React, { useContext, useState } from "react";
import { MovieContext } from "./movieContext";
import { Link } from "react-router-dom";
import Pagination from "../../utils/pagination";

const MoviesList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(5);

  //Getting Current Movies
  const indexOfLastPost = currentPage * elementsPerPage;
  const indexOfFirstPost = indexOfLastPost - elementsPerPage;
  const currentElements = movies.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          {currentElements.map((m, index) => (
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
      <Pagination
        elementsPerPage={elementsPerPage}
        totalPosts={movies.length}
        paginate={paginate}
      />
    </div>
  );
};

export default MoviesList;
