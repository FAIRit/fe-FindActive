import React from "react";
import styles from "../styles/Showcase.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Showcase = () => {
  return (
    <div className={styles.container}>
      <div className={styles.showcase}>
        <FontAwesomeIcon icon={faBars} className={styles.coffee} />
      </div>
    </div>
  );
};

export default Showcase;
