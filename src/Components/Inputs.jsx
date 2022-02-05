import React from "react";
import styles from './inputs.module.css'

const Inputs = ({ formik, name, label, placeholder }) => {
  return (
    <div className={styles.inputs}>
      <label className="">{label}</label>
      {formik.errors[name] && formik.touched[name] && (
        <span className={styles.error}>{formik.errors[name]}</span>
      )}
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
