import React from "react";
import LoggedNavbar from "../layouts/LoggedNavbar";
import SearchBar from "./SearchBar";
import styles from "../styles/AddProductForm.module.css";
import { Formik } from "formik";
import firebase from "../firebase/firebase";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Wpisz co najmniej 3 znaki")
    .max(50, "Za długa nazwa")
    .required("Pole wymagane"),
  location: Yup.string()
    .min(3, "Wpisz co najmniej 3 znaki")
    .max(20, "Za długa nazwa")
    .required("Pole wymagane"),
  type: Yup.string()
    .min(3, "Wpisz co najmniej 3 znaki")
    .max(20, "Za długa nazwa")
    .required("Pole wymagane"),
  description: Yup.string()
    .min(3, "Wpisz co najmniej 3 znaki")
    .max(500, "Za długi opis")
    .required("Pole wymagane")
});

const AddProduct = () => {
  return (
    <div className={styles.addProductPage}>
      <LoggedNavbar />
      <SearchBar />
      <div className={styles.formContainer}>
        <span className={styles.formTitle}>Dodaj obiekt sportowy do listy</span>
        <Formik
          initialValues={{ name: "", location: "", type: "", description: "" }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            const name = values.name;
            const location = values.location;
            const type = values.type;
            const description = values.description;
            firebase
              .database()
              .ref("/clubs")
              .push({
                name,
                location,
                type,
                description
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
            <form onSubmit={handleSubmit} className={styles.addProductForm}>
              <label for="name">Nazwa</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={styles.addProductInput}
              />
              {errors.name && touched.name ? (
                <div className={styles.error}>{errors.name}</div>
              ) : null}

              <label for="location">Miasto</label>
              <input
                type="text"
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                className={styles.addProductInput}
              />
              {errors.location && touched.location ? (
                <div className={styles.error}>{errors.location}</div>
              ) : null}

              <label for="type">Rodzaj</label>
              <input
                type="text"
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.type}
                className={styles.addProductInput}
              />
              {errors.type && touched.type ? (
                <div className={styles.error}>{errors.type}</div>
              ) : null}

              <label for="type">Akdeptowane karty lojalnościowe</label>
              <input
                type="text"
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.type}
                className={styles.addProductInput}
              />
              {errors.type && touched.type ? (
                <div className={styles.error}>{errors.type}</div>
              ) : null}

              <label for="type">Link do strony</label>
              <input
                type="text"
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.type}
                className={styles.addProductInput}
              />
              {errors.type && touched.type ? (
                <div className={styles.error}>{errors.type}</div>
              ) : null}

              <label for="description">Oferta</label>
              <textarea
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className={styles.addProductTextarea}
              />
              {errors.description && touched.description ? (
                <div className={styles.error}>{errors.description}</div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.addProductBtn}
              >
                Dodaj do listy
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
