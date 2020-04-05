import React from "react";
import styles from "../../styles/Product.module.css";

const Product = props => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.product}>
        <img src={props.photo} alt="product"/>
        <div className={styles.productDescription}>
          <div className={styles.productName}>{props.name}</div>
          <div className={styles.productType}> {props.type}</div>
          <div className={styles.productLocation}>{props.location}</div>
          <div className={styles.productLocation}>{props.link}</div>
          <div className={styles.productLocation}>{props.cards}</div>


        </div>
      </div>
    </div>
  );
};

export default Product;
