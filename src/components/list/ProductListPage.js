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
import Paginationn from "../Pagination";

const ProductListPage = () => {
  const isLoggedIn = useAuth();

  const [clubsFB, setClubsFB] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    displayClubs((clubsFB) => {
      setClubsFB(clubsFB);
    });

    return () => {
      stopClubs();
    };
  }, []);

  const list = clubsFB.map((product) => (
    <div style={{ marginTop: "30px" }}>
      <div className={styles.listLink} key={product.id}>
        <Product {...product} src={product.imageUrl} />
      </div>
    </div>
  ));

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(clubsFB.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }


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
      <div className={styles.list}>{currentPosts}</div>
      <button
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          } else {
            return null;
          }
        }}
      >
        prev
      </button>
      <Paginationn
        postsPerPage={postsPerPage}
        totalPosts={clubsFB.length}
        paginate={paginate}
      />
      <button
        onClick={() => {
          if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
          } else {
            return null;
          }
        }}
      >
        next
      </button>
    </div>
  );
};

export default ProductListPage;
