import React, { Fragment, useContext } from "react";
import { MovieContext } from "./movieContext";

import useForm from "../../customHooks/useForm";
import { CategoryContext } from "./../category/categoryContext";
import API from "../../utils/api";

const AddMovie = (props) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      title: "",
      description: "",
      release_year: "",
      language: "",
      category: "",
    },
    submit
  );

  const [categories, setCategories] = useContext(CategoryContext);
  const [movies, setMovies] = useContext(MovieContext);

  function submit() {
    // Here we are going call Node API to Post our Movie
    console.log(values);
    try {
      API.post("movies", values)
        .then(() => {
          const category = categories.find((c) => c._id === values["category"]);
          values["category"] = category;
          const newMovieList = [values, ...movies];
          setMovies(newMovieList);
          props.history.push("/movies");
        })
        .catch((err) => {
          console.log("Something went wrong ", err);
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Fragment>
      <h2 className='mt-2'>New Movie</h2>
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
            <option value={c._id} key={c._id}>
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

export default AddMovie;
