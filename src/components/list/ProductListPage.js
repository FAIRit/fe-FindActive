import React, { useState, useEffect } from "react";
import Navbar from "../../layouts/Navbar";
import { Link } from "react-router-dom";
import { displayClubs, stopClubs } from "../services/ClubService";
import Product from "./Product";
import SearchBar from "../SearchBar";
import styles from "../../styles/ProductListPage.module.css";
import LoggedNavbar from "../../layouts/LoggedNavbar";
import firebase from "../../firebase/firebase";

const ProductListPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const auth = firebase.auth();
  auth.onAuthStateChanged(user => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  const [clubsFB, setClubsFB] = useState([]);
  useEffect(() => {
    displayClubs(clubsFB => {
      setClubsFB(clubsFB);
    });

    return () => {
      stopClubs();
    };
  }, []);

  const list = clubsFB.map(product => (
    <Link
      to={`/product/${product.id}`}
      className={styles.listLink}
      key={product.id}
    >
      <Product {...product} src={product.imageUrl} />
    </Link>
  ));

  return (
    <div className={styles.productListPage}>
      {isLoggedIn ? <LoggedNavbar /> : <Navbar />}

      <SearchBar />
      <div className={styles.list}>{list}</div>
    </div>
  );
};

export default ProductListPage;
