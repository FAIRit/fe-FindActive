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
    <Link to={`/product/${product.id}`} className={styles.listLink}>
      <Product {...product} src={product.imageUrl} />
    </Link>
  ));

  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className={styles.list}>{list}</div>
    </div>
  );
};

export default ProductListPage;
