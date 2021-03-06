import React from "react";

const Pagination = ({ elementsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      {pageNumbers.length > 1 ? (
        <ul className='pagination'>
          {pageNumbers.map((number) => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Pagination;
