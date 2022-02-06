import React from "react";
import styles from "../Styles/inputs.module.css";

const Inputs = ({ formik, name, label, placeholder }) => {
  return (
    <div>
      <div className={styles.errorFlex}>
        <label>{label}</label>
        {formik.errors[name] && formik.touched[name] && (
          <span className={styles.errors}>{formik.errors[name]}</span>
        )}
      </div>
      <div>
        <input
          {...formik.getFieldProps({ name })}
          type="text"
          name={name}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Inputs;
