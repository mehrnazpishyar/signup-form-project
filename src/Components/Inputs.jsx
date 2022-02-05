import React from "react";

const Inputs = ({ formik, name, label, placeholder }) => {
  return (
    <div className="">
      <label className="">{label}</label>
      {formik.errors[name] && formik.touched[name] && (
        <div className="">{formik.errors[name]}</div>
      )}
      <div>
        <input
          {...formik.getFieldProps({ name })}
          className=""
          type="text"
                  name={name}
                  placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Inputs;
