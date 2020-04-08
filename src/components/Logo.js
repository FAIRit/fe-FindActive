import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Logo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <NavLink to="/" className={styles.logo}>
      <FontAwesomeIcon
        icon={faDumbbell}
        className={styles.dumbbell}
      />
      <span className={styles.logoText}>FindActive</span>
    </NavLink>
  );
};

export default Logo;
