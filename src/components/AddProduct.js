import React from "react";
import LoggedNavbar from "../layouts/LoggedNavbar";
import SearchBar from "./SearchBar";
import styles from "../styles/AddProductForm.module.css";
import { Formik } from "formik";
import firebase from "../firebase/firebase";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dropdown, Input } from "semantic-ui-react";

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
    .url("błędny adres"),
  photo: Yup.string()
    .min(4, "Wpisz co najmniej 4 znaki")
    .max(300, "Za długi link")
    .required("Pole wymagane")
    .url("błędny adres"),
});

const notify = () => toast("oooo");

// const cardOptions = [
//   { key: "beactive", text: "BeActive", value: "BeActive" },
//   { key: "fitprofit", text: "FitProfit", value: "FitProfit" },
//   { key: "fitsport", text: "FitSport", value: "FitSport" },
//   { key: "multiactive", text: "MultiActive", value: "MultiActive" },
//   { key: "pole", text: "MultiSport Classic", value: "MultiSport Classic" },
//   { key: "multiplus", text: "MultiSport Plus", value: "MultiSport Plus" },
//   { key: "multisenior", text: "MultiSenior", value: "MultiSenior" },
//   { key: "oksystem", text: "OK System", value: "OK System" }
// ];

// const CardDropdown = () => (
//   <Dropdown
//     placeholder="wybierz z listy..."
//     name="card"
//     className={styles.addProductInput}
//     fluid
//     multiple
//     selection
//     options={cardOptions}
//   />
// );

const typeOptions = [
  { key: "crossfit", text: "crossfit", value: "crossfit" },
  { key: "joga", text: "joga", value: "joga" },
  { key: "pilates", text: "pilates", value: "pilates" },
  { key: "pływalnia", text: "pływalnia", value: "pływalnia" },
  { key: "pole", text: "pole dance", value: "pole dance" },
  { key: "rehabilitacja", text: "rehabilitacja", value: "rehabilitacja" },
  { key: "siłownia", text: "siłownia", value: "siłownia" },
  { key: "sztuki walki", text: "sztuki walki", value: "sztuki walki" },
  { key: "taniec", text: "taniec", value: "taniec" },
];

const TypeDropdown = () => (
  <Dropdown
    placeholder="wybierz z listy..."
    name="type"
    fluid
    selection
    options={typeOptions}
    className={styles.addProductInput}
  />
);

const voivodeshipOptions = [
  { key: "dolnoslaskie", text: "dolnośląskie", value: "dolnośląskie" },
  {
    key: "kujawsko-pomorskie",
    text: "kujawsko-pomorskie",
    value: "kujawsko-pomorskie",
  },
  { key: "lubelskie", text: "lubelskie", value: "lubelskie" },
  { key: "lubuskie", text: "lubuskie", value: "lubuskie" },
  { key: "lodzkie", text: "łódzkie dance", value: "łódzkie" },
  { key: "malopolskie", text: "małopolskie", value: "małopolskie" },
  { key: "mazowieckie", text: "mazowieckie", value: "mazowieckie" },
  { key: "opolskie", text: "opolskie", value: "opolskie" },
  { key: "podkarpackie", text: "podkarpackie", value: "podkarpackie" },
  { key: "podlaskie", text: "podlaskie", value: "podlaskie" },
  { key: "pomorskie", text: "pomorskie", value: "pomorskie" },
  { key: "slaskie", text: "śląskie", value: "śląskie" },
  { key: "swietokrzyskie", text: "świętokrzyskie", value: "świętokrzyskie" },
  {
    key: "warminsko",
    text: "warmińsko-mazurskie",
    value: "warmińsko-mazurskie",
  },
  { key: "wielkopolskie", text: "wielkopolskie", value: "wielkopolskie" },
  {
    key: "zachodniopomorskie",
    text: "zachodniopomorskie",
    value: "zachodniopomorskie",
  },
];

const VoivodeshipDropdown = () => {
  return (
    <Dropdown
      placeholder="wybierz z listy..."
      name="voivodeship"
      fluid
      selection
      options={voivodeshipOptions}
      className={styles.addProductInput}
    
    />
  );
};

const AddProduct = () => {
  return (
    <div className={styles.addProductPage}>
      <LoggedNavbar />
      <SearchBar />
      <div className={styles.formContainer}>
        <span className={styles.formTitle}>Dodaj obiekt sportowy do listy</span>
        <Formik
          initialValues={{
            name: "",
            location: "",
            voivodeship: "",
            cards: "",
            type: "",
            description: "",
            link: "",
            photo: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            const name = values.name;
            const location = values.location;
            const voivodeship = values.voivodeship;
            const type = values.type;
            const description = values.description;
            const link = values.link;
            const cards = values.cards;
            const photo = values.photo;
            firebase.database().ref("/clubs").push({
              name,
              location,
              voivodeship,
              type,
              description,
              link,
              cards,
              photo,
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
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={styles.addProductForm}>
              <label>Nazwa</label>
              <Input
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

              <label htmlFor="location">Miasto</label>
              <Input
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

              <label htmlFor="voivodeship">Województwo</label>
              <VoivodeshipDropdown
                value={values.voivodeship}
                onChange={handleChange}
              />
              {errors.voivodeship && touched.voivodeship ? (
                <div className={styles.error}>{errors.voivodeship}</div>
              ) : null}

              <label htmlFor="type">Rodzaj</label>
              <TypeDropdown value={values.type} onChange={handleChange} />
              {errors.type && touched.type ? (
                <div className={styles.error}>{errors.type}</div>
              ) : null}

              <label htmlFor="cards">Akceptowane karty lojalnościowe</label>

              {/* <CardDropdown value={values.card} onChange={handleChange} />

              {errors.cards && touched.cards ? (
                <div className={styles.error}>{errors.cards}</div>
              ) : null} */}

              <label htmlFor="link">Link do strony</label>
              <Input
                type="url"
                name="link"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.link}
                className={styles.addProductInput}
              />
              {errors.link && touched.link ? (
                <div className={styles.error}>{errors.link}</div>
              ) : null}

              <label htmlFor="photo">Zdjęcie</label>
              <Input
                type="url"
                placeholder="adres url zdjęcia"
                name="photo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.photo}
                className={styles.addProductInput}
              />
              {errors.photo && touched.photo ? (
                <div className={styles.error}>{errors.photo}</div>
              ) : null}

              <label htmlFor="description">Oferta</label>
              <textarea
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className={styles.addProductTextarea}
              ></textarea>
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
