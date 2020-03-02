import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/SearchBar.module.css'

const SearchBar = () => {
  return (
    <div>
      <form className={styles.formContainer}>
        <input type="text" className={styles.searchInput}></input>
        <button className={styles.searchButton}>
          {" "}
          <FontAwesomeIcon icon={faSearch} size={"2x"} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
