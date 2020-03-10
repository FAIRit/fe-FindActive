import React from "react";
import { Formik } from "formik";
import firebase from "../../firebase/firebase";
import values from "./userFormValidate";
import styles from "../../styles/RegisterForm.module.css";

class RegisterForm extends React.Component {
  render() {
    return (
      <div className={styles.registerFormContainer}>
        <div className={styles.registerForm}>
          <h1>Zarejestruj się</h1>
          <Formik
            initialValues={{ email: "", password: "", name: "" }}
            validate={values}
            onSubmit={values => {
              const auth = firebase.auth();
              const name = values.name;
              const email = values.email;
              const password = values.password;
              auth.createUserWithEmailAndPassword(email, password).then(() => {
                const user = firebase.auth().currentUser;
                user
                  .updateProfile({
                    displayName: name
                  })
                  .then(() => {
                    firebase
                      .database()
                      .ref(`/users/${user.uid}`)
                      .set({
                        name,
                        email
                      });
                  });
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
              <form onSubmit={handleSubmit} className={styles.registerInputs}>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={styles.nameInput}
                  placeholder="imię"
                />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={styles.registerEmailInput}
                  placeholder="e-mail"

                />
                {errors.email && touched.email && errors.email}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={styles.registerPasswordInput}
                  placeholder="hasło"
                />
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting} className={styles.registerConfirmBtn}>
                  Rejestracja
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
