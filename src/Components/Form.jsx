import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Inputs from "./Inputs";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    terms: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(8, "Password should be 8 chars minimum"),
    terms: Yup.boolean().oneOf(
      [true],
      "you must accept the terms and conditions"
    ),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit,
    enableReinitialize: true,
  });

    console.log(formik.values);
  return (
    <div>
      <div>
        <img src="././assets/images/logo.png" />
        <h2>Eden</h2>
      </div>
      <div>
        <h1>Hi, Welcome to Eden! </h1>
        <p>Start your 7-day free trial</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="">
        <Inputs
          formik={formik}
          name="name"
          label="Your Name"
          placeholder="Steve Jobs"
        />
        <Inputs
          formik={formik}
          name="email"
          label="Your Email"
          placeholder="name@email.com"
        />
        <Inputs
          formik={formik}
          name="password"
          label="Password"
          placeholder="at least 8 characters"
        />

        <button type="submit" className="">
          Get Started
        </button>

        <input
          type="checkbox"
          name="terms"
          value={formik.values.terms}
          onChange={formik.handleChange}
          checked={formik.values.terms}
        />
      </form>
    </div>
  );
};
export default Form;
