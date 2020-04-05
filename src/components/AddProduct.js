import React from "react";
import LoggedNavbar from "../layouts/LoggedNavbar";
import SearchBar from "./SearchBar";
import styles from "../styles/AddProductForm.module.css";
import { Formik } from "formik";
import firebase from "../firebase/firebase";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown, Input, Form, TextArea } from "semantic-ui-react";


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Wpisz co najmniej 3 znaki")
    .max(50, "Za długa nazwa")
    .required("Pole wymagane"),
  location: Yup.string()
    .min(3, "Wpisz co najmniej 3 znaki")
    .max(20, "Za długa nazwa")
    .required("Pole wymagane"),
  description: Yup.string()
    .min(3, "Wpisz co najmniej 3 znaki")
    .max(500, "Za długi opis")
    .required("Pole wymagane"),
  link: Yup.string()
    .min(4, "Wpisz co najmniej 4 znaki")
    .max(500, "Za długi link")
    .required("Pole wymagane")
    .url("wprowadź poprawny adres url")
});

const options = [
  { key: "beactive", text: "BeActive", value: "BeActive" },
  { key: "fitprofit", text: "FitProfit", value: "FitProfit" },
  { key: "fitsport", text: "FitSport", value: "FitSport" },
  { key: "multiactive", text: "MultiActive", value: "MultiActive" },
  { key: "multiclassic", text: "MultiSport Classic", value: "MultiSport Classic" },
  { key: "multiplus", text: "MultiSport Plus", value: "MultiSport Plus" },
  { key: "multisenior", text: "MultiSenior", value: "MultiSenior" },
  { key: "oksystem", text: "OK System", value: "OK System" },

];



const DropdownExampleMultipleSelection = () => (
  <Dropdown
    placeholder="Skills"
    name="type"
    fluid
    multiple
    selection
    options={options}
  />
);

const AddProduct = props => {
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
            const link = values.link;
            const cards = values.cards;
            firebase
              .database()
              .ref("/clubs")
              .push({
                name,
                location,
                type,
                description,
                link,
                cards
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
            <Form onSubmit={handleSubmit} className={styles.addProductForm}>
              <label for="name">Nazwa</label>
              <Input 
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={styles.addProductInput}
              ></Input>
              {errors.name && touched.name ? (
                <div className={styles.error}>{errors.name}</div>
              ) : null}

              <label for="location">Miasto</label>
              <Input
                type="text"
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                className={styles.addProductInput}
              ></Input>
              {errors.location && touched.location ? (
                <div className={styles.error}>{errors.location}</div>
              ) : null}

              <label for="type">Rodzaj</label>
              <select 
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.type}
                className={styles.addProductInput}
              >
                <option default>wybierz z listy...</option>
                <option value="crossfit">crossfit</option>
                <option value="joga">joga</option>
                <option value="pilates">pilates</option>
                <option value="plywalnia">pływalnia</option>
                <option value="pole">pole dance</option>
                <option value="rehabilitacja">rehabilitacja</option>
                <option value="silownia">siłownia/klub fitness</option>
                <option value="sztuki">sztuki walki</option>
                <option value="taniec">taniec</option>
              </select>
              {errors.type && touched.type ? (
                <div className={styles.error}>{errors.type}</div>
              ) : null} 
            

              <label for="cards">Akceptowane karty lojalnościowe</label>

              {/* <select
                name="cards"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cards}
                className={styles.addProductInput}
              >
                <option default>wybierz z listy...</option>
                <option value="BeActive">BeActive</option>
                <option value="FitProfit">FitProfit</option>
                <option value="FitSport">FitSport</option>
                <option value="MultiActive">MultiActive</option>
                <option value="MultiSport Classic">MultiSport Classic</option>
                <option value="MultiSport Plus">MultiSport Plus</option>
                <option value="MultiSport Senior">MultiSport Senior</option>
                <option value="MyLife">MyLife</option>
                <option value="OK System">OK System</option>
              </select> */}

              <DropdownExampleMultipleSelection
                value={props.selection}
                onChange={handleChange}
              />



              {errors.cards && touched.cards ? (
                <div className={styles.error}>{errors.cards}</div>
              ) : null}

              <label for="link">Link do strony</label>
              <Input
                type="url"
                name="link"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.link}
                className={styles.addProductInput}
              ></Input>
              {errors.link && touched.link ? (
                <div className={styles.error}>{errors.link}</div>
              ) : null}

              <label for="description">Oferta</label>
              <TextArea
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className={styles.addProductTextarea}
              ></TextArea>
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
