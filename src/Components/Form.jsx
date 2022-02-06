import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Inputs from "./Inputs";
import styles from "../Styles/form.module.css";

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

  console.log(formik.isValid)

  return (
    <div>
      <div className={styles.title}>
        <img src="././assets/images/logo.png" width="30px" alt="logo"/>
        <h2>Eden</h2>
      </div>
      <div className={styles.welcome}>
        <h1>Hi, Welcome to Eden! </h1>
        <p>Start your 7-day free trial</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
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

        <button type="submit" disabled={!formik.isValid}>
          Get Started
        </button>

        <div className={styles.checkBox}>
          <input
            type="checkbox"
            name="terms"
            value={formik.values.terms}
            onChange={formik.handleChange}
            checked={formik.values.terms}
          />
          <label>I agree to the Terms & Conditions</label>
        </div>
        {formik.errors.terms && formik.touched.terms && (
          <div className={styles.error}>{formik.errors.terms}</div>
        )}
        <div className={styles.link}>
          <a href="#">Are you already member? </a>
        </div>
      </form>
    </div>
  );
};
export default Form;
