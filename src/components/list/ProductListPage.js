import React, { useState, useEffect } from "react";
import Navbar from "../../layouts/Navbar";
import { Link } from "react-router-dom";
import { displayClubs, stopClubs } from "../../services/ClubService";
import Product from "./Product";
import SearchBar from "../SearchBar";
import styles from "../../styles/ProductListPage.module.css";
import LoggedNavbar from "../../layouts/LoggedNavbar";
import { useAuth } from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";



const ProductListPage = () => {
  const isLoggedIn = useAuth();

  const [clubsFB, setClubsFB] = useState([]);

  useEffect(() => {
    displayClubs((clubsFB) => {
      setClubsFB(clubsFB);
    });

    return () => {
      stopClubs();
    };
  }, []);

  const list = clubsFB.map(product => (
    <div style={{ marginTop: "30px" }}>
      <div
        className={styles.listLink}
        key={product.id}
      >
        <Product  {...product} src={product.imageUrl} />
      </div>

    </div>
  ));

  return (
    <div className={styles.productListPage}>
      {isLoggedIn ? <LoggedNavbar /> : <Navbar />}
      <SearchBar />
      {isLoggedIn ? (
        <div className={styles.btnContainer}>
          <Link to="/addproduct" className={styles.addToListBtn}>
            <FontAwesomeIcon icon={faPlus} size={"3x"} />
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className={styles.list}>{list}</div>
    </div>
  );
};

export default ProductListPage;
