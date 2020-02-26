import React from "react";
import styles from "../styles/TopCategories.module.css";
import pole from "../img/pole3.png";
import yoga from "../img/yog.png";
import gym from "../img/gym0.jpg";

const TopCategories = () => {
  return (
    <div className={styles.topCategories}>
      <h2>TopCategories</h2>
      <div className={styles.categoriesContainer}>
        <div className={styles.categorie}><img src={gym} className={styles.categoriePhoto} /><span>Gym</span></div>
        <div className={styles.categorie}><img src={yoga} className={styles.categoriePhoto} /><span>Yoga</span></div>
        <div className={styles.categorie}><img src={pole} className={styles.categoriePhoto} /><span>Pole</span></div>
      </div>
    </div>
  );
};

export default TopCategories;
