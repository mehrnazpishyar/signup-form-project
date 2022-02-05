import React from "react";
import Form from "../Components/Form";
import Info from "../Components/Info";
import styles from "./login.module.css"

const Login = () => {
  return (
    <div className={styles.login}>
      <div className="left-side">
        <Form />
      </div>
      <div className="right-side">
        <Info />
      </div>
    </div>
  );
};

export default Login;
