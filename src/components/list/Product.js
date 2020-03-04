import React from "react";
import styles from "../../styles/Product.module.css";

const Product = props => {
  return (
    <>
      <div className={styles.product}>
        <div className={styles.productName}>{props.name}</div>
        <div className={styles.productType}> {props.type}</div>
        <div className={styles.productLocation}>{props.location}</div>
      </div>
    </>
  );
};

export default Product;
