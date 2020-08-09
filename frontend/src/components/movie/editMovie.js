import React, { Fragment, useContext, useEffect } from "react";
import { MovieContext } from "./movieContext";

import useForm from "../../customHooks/useForm";
import { CategoryContext } from "./../category/categoryContext";
import API from "../../utils/api";

const EditMovie = (props) => {
  const { handleChange, handleSubmit, values, setValues, errors } = useForm(
    {
      title: "",
      description: "",
      release_year: "",
      language: "",
      category: "",
    },
    submit
  );
  useEffect(() => {
    const movieData = async () => {
      const result = await API.get(`movies/${props.match.params.id}`);
      result.data.category = result.data.category._id;
      setValues(result.data);
    };
    movieData();
  }, []);

  const [categories, setCategories] = useContext(CategoryContext);
  const [movies, setMovies] = useContext(MovieContext);

  function submit() {
    // Here we are going call Node API to Update our Movie
    try {
      delete values._id;
      delete values.last_update;
      delete values.__v;
      API.put(`movies/${props.match.params.id}`, values).then((result) => {
        const updateMovieList = [...movies];
        const index = updateMovieList.indexOf(
          updateMovieList.find((m) => m._id === props.match.params.id)
        );
        updateMovieList[index] = result.data;
        setMovies(updateMovieList);
        props.history.push("/movies");
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Fragment>
      <h2 className='mt-2'>Edit Movie</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            name='title'
            type='text'
            className='form-control'
            id='title'
            value={values.title}
            onChange={handleChange}
          />
          <div
            className={errors["title"] ? "alert alert-danger" : ""}
            role='alert'
          >
            {errors["title"]}
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            type='text'
            className='form-control'
            id='description'
            name='description'
            value={values.description}
            onChange={handleChange}
          />
          <div
            className={errors["description"] ? "alert alert-danger" : ""}
            role='alert'
          >
            {errors["description"]}
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='release_year'>Release_year</label>
          <input
            type='text'
            className='form-control'
            id='release_year'
            name='release_year'
            value={values.release_year}
            onChange={handleChange}
          />
          <div
            className={errors["release_year"] ? "alert alert-danger" : ""}
            role='alert'
          >
            {errors["release_year"]}
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='language'>Language</label>
          <input
            type='text'
            className='form-control'
            id='language'
            name='language'
            value={values.language}
            onChange={handleChange}
          />
          <div
            className={errors["language"] ? "alert alert-danger" : ""}
            role='alert'
          >
            {errors["language"]}
          </div>
        </div>
        <label htmlFor='category'>Category</label>
        <select
          id='category'
          name='category'
          className='custom-select'
          onChange={handleChange}
          value={values.categoryId}
        >
          <option defaultValue>Open this select menu</option>
          {categories.map((c) => (
            <option
              selected={values.category === c._id}
              value={c._id}
              key={c._id}
            >
              {c.name}
            </option>
          ))}
        </select>
        <button type='submit' className='btn btn-primary mt-3'>
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default EditMovie;
