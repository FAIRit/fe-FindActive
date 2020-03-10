import React from "react";
import { Formik } from "formik";
import firebase from "../../firebase/firebase";
import values from "./userFormValidate";
import styles from "../../styles/LoginForm.module.css";

const LoginForm = () => (
  <div className={styles.loginFormContainer}>
    <div className={styles.loginForm}>
      <h1>Zaloguj się</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values}
        onSubmit={values => {
          const auth = firebase.auth();
          const email = values.email;
          const password = values.password;
          auth.signInWithEmailAndPassword(email, password).catch(error => {
            if (error.code === "auth/wrong-password") {
              console.log("wrong password");
            } else if (error.code === "auth/user-not-found") {
              console.log("user not found");
            }
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} className={styles.loginInputs}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Zaloguj się
            </button>
          </form>
        )}
      </Formik>
    </div>
  </div>
);

export default LoginForm;
