import React from "react";
import styles from "../styles/TopCategories.module.css";
import pole from '../img/pole3.png'
import yoga from '../img/yog.png'
import gym from '../img/gym0.jpg'



const TopCategories = () => {
    return(
        <div className={styles.topCategories}>
        <h2>TopCategories</h2>
        <img src={gym} className={styles.categoriePhoto}/>
        <img src={yoga} className={styles.categoriePhoto}/>
        <img src={pole} className={styles.categoriePhoto}/>
        </div>
    )
}

export default TopCategories;
