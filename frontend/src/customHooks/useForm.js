import { useState } from "react";
import validate from "../components/movie/formValidation";

const useForm = (initialValues, callback) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState(initialValues || {});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Handling the Errors
    setErrors(validate(values));
    callback();
  };
  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    errors,
  };
};

export default useForm;
