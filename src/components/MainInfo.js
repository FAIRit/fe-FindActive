import React, { useState } from "react";
import styles from "../styles/MainInfo.module.css";
import Modal from './btns/RegisterBtn'

const MainInfo = () => {
  return (
    <div className={styles.mainInfo}>
      <h2>What is FindActive?</h2>
      <div className={styles.mainInfoText}>FindActive is first Polish search engine for sports objects. Search for any categorie you want. Find fitness classess anywhere, anytime. </div>
      <button className={styles.mainInfoButton}>Sign up for free</button>
    </div>
  );
};

export default MainInfo;
