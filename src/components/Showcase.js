import React from "react";
import styles from "../styles/Showcase.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Showcase = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faBars} size={"3x"} className={styles.coffee} />
      <div className={styles.showcase}></div>
    </div>
  );
};

export default Showcase;
