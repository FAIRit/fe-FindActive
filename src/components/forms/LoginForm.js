import React from "react";
import { Formik } from "formik";
import firebase from "../../firebase/firebase";

const LoginForm = () => (
  <div>
    <h1>Log in</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={values => {
        const auth = firebase.auth();
        const email = values.email;
        const password = values.password;
        auth
          .signInWithEmailAndPassword(email, password)
          .catch(error => {
            if (
              error.code === "auth/wrong-password"){
                console.log('wrong password')
              } else if(
              error.code === "auth/user-not-found"){
                console.log('user now found')
              }

            }
          )
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
        <form onSubmit={handleSubmit}>
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
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
