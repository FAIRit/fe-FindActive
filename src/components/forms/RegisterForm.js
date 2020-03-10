import React from "react";
import { Formik } from "formik";
import firebase from "../../firebase/firebase";
import styles from "../../styles/RegisterForm.module.css";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Za krótkie imię")
    .max(20, "Wpisz max 20 znaków")
    .required("Pole wymagane"),
  password: Yup.string()
    .min(6, "Hasło musi mieć co najmniej 6 znaków")
    .max(15, "Za długie hasło")
    .required("Pole wymagane"),
  email: Yup.string()
    .email("Błędny adres e-mail")
    .required("Pole wymagane")
});

class RegisterForm extends React.Component {
  render() {
    return (
      <div className={styles.registerFormContainer}>
        <div className={styles.registerForm}>
          <h1>Zarejestruj się</h1>
          <Formik
            initialValues={{ email: "", password: "", name: "" }}
            validationSchema={SignupSchema}
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
                {errors.name && touched.name ? <div className={styles.error}>{errors.name}</div> : null}

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={styles.registerEmailInput}
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
                  className={styles.registerPasswordInput}
                  placeholder="hasło"
                />
                {errors.password && touched.password ? (
                  <div className={styles.error}>{errors.password}</div>
                ) : null}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.registerConfirmBtn}
                >
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
