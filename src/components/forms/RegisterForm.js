import React from "react";
import { Formik } from "formik";
import firebase from "../../firebase/firebase";

class RegisterForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Create your account</h1>
        <Formik
          initialValues={{ email: "", password: "", name: "" }}
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
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
  }
}

export default RegisterForm;