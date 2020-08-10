import React, { Fragment, useState } from "react";

const Search = ({ searchAction }) => {
  const [search, setSearch] = useState("");
  return (
    <Fragment>
      <form className='form-inline my-2 my-lg-0'>
        <input
          className='form-control mr-sm-2'
          type='text'
          placeholder='Search'
          aria-label='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={(event) => searchAction(event, search)}
          className='btn btn-secondary my-2 my-sm-0'
          type='submit'
        >
          Search
        </button>
      </form>
    </Fragment>
  );
};

export default Search;
