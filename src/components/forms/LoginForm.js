import React, { useState } from "react";
import { Formik } from "formik";
import firebase from "../../firebase/firebase";
import styles from "../../styles/LoginForm.module.css";
import * as Yup from "yup";
import { googleLoginRedirect } from "../../services/AuthService";
import ForgotPassword from "./ForgotPassword";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Hasło musi mieć co najmniej 6 znaków")
    .max(15, "Za długie hasło")
    .required("Pole wymagane"),
  email: Yup.string()
    .email("Błędny adres e-mail")
    .required("Pole wymagane")
});

const LoginForm = () => {
  const [message, setMessage] = useState(null);


  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.loginForm}>
        <h1>Zaloguj się</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            const auth = firebase.auth();
            const email = values.email;
            const password = values.password;
            auth.signInWithEmailAndPassword(email, password).catch(error => {
              if (error.code === "auth/wrong-password") {
                setMessage("Błędny login lub hasło");
              } else if (error.code === "auth/user-not-found") {
                setMessage("Błędny login lub hasło");
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
            handleSubmit
          }) => (
            <div>
              <form onSubmit={handleSubmit} className={styles.loginInputs}>
                <div className={styles.error}>{message}</div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={styles.loginInput}
                  placeholder="e-mail"
                />
                {errors.email && touched.email ? (
                  <div className={styles.error}>{errors.email}</div>
                ) : null}

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={styles.passwordInput}
                  placeholder="hasło"
                />
                {errors.password && touched.password ? (
                  <div className={styles.error}>{errors.password}</div>
                ) : null}

                <button type="submit" className={styles.loginConfirmBtn}>
                  Zaloguj się
                </button>
              </form>
            </div>
          )}
        </Formik>
        <button
          type="submit"
          onClick={() => googleLoginRedirect()}
          className={styles.loginWithGoogleBtn}
        >
          Kontynuuj z Google
        </button>
        {/* <button
          className={styles.forgotPasswordLink}
          onClick={displayForgotPasswordModal}
        >
          Nie pamiętasz hasła?
        </button> */}
        <ForgotPassword/>
      </div>
    </div>
  );
};

export default LoginForm;
