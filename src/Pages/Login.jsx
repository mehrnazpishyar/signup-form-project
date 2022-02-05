import React from "react";
import Form from "../Components/Form";
import Info from "../Components/Info";
import styles from "./login.module.css"

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.leftSide}>
        <Form />
      </div>
      <div className={styles.rightSide}>
        <Info />
      </div>
    </div>
  );
};

export default Login;
