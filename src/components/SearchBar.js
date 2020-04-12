import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/SearchBar.module.css";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const location = useLocation();
  return (
    <div>
      <form className={styles.formContainer}>
        <input
          type="text"
          className={
            location.pathname === "/"
              ? styles.searchInput
              : styles.searchColorInput
          }
          />
        <button className={styles.searchButton}>
          {" "}
          <FontAwesomeIcon icon={faSearch} size={"2x"} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
