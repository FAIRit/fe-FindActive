import React, { useState, useEffect } from "react";
import Navbar from "../../layouts/Navbar";
import { Link } from "react-router-dom";
import { displayClubs, stopClubs } from "../services/ClubService";
import Product from "./Product";
import SearchBar from "../SearchBar";
import styles from "../../styles/ProductListPage.module.css";

const ProductListPage = () => {
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
    <div key={product.id} className={styles.productContainer}>
        <Link to={`/product/${product.id}`} className={styles.singleProduct}>
          <img
            src={product.photo}
            className={styles.gymImage}
            alt="club photo"
          />
          <Product {...product} src={product.imageUrl} />
        </Link>
    </div>
  ));

  return (
    <div className={styles.productList}>
      <Navbar />
      <SearchBar />
      <div>{list}</div>
    </div>
  );
};

export default ProductListPage;
