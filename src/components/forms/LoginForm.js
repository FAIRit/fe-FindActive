import React, { useState } from "react";
import { Formik } from "formik";
import firebase from "../../firebase/firebase";
import styles from "../../styles/LoginForm.module.css";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

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

  const googleLoginRedirect = () => {
    console.log("google auth");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  };

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
            handleSubmit,
            isSubmitting
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

                <NavLink className={styles.forgotPasswordLink} to="#">
                  Nie pamiętasz hasła?
                </NavLink>
                <button
                  type="submit"
                  className={styles.loginConfirmBtn}
                  disabled={isSubmitting}
                >
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
      </div>
    </div>
  );
};

export default LoginForm;
