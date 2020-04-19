import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/ProfileBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt as faListAlt } from "@fortawesome/free-regular-svg-icons";


const SearchBtn = () => {
  return (
    <div>
      <NavLink to="/products">
        {" "}
        <FontAwesomeIcon icon={faListAlt} className={styles.searchIcon} />
      </NavLink>
    </div>
  );
};

export default SearchBtn;
