import React from "react";
import styles from "../styles/Logo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <FontAwesomeIcon
        icon={faDumbbell}
        size={"2x"}
        className={styles.dumbbell}
      />
      <span className={styles.logoText}>FindActive</span>
    </div>
  );
};

export default Logo;
