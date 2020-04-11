import React, { useState } from "react";
import styles from "../../styles/Product.module.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const Product = (props) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <div className={styles.productContainer}>
      <div className={styles.product}>
        <Link to={`/product/${props.id}`}>
          <img src={props.photo} alt="product" />
        </Link>
        <div className={styles.productDescription}>
          <Link to={`/product/${props.id}`}>
            <div className={styles.productName}>{props.name}</div>
          </Link>
          <div className={styles.productType}> {props.type}</div>
          <div className={styles.productLocation}>
            {props.location}, {props.voivodeship}
          </div>
          <a href={props.link}>
            <div className={styles.productLocation}>{props.link}</div>
          </a>
          <div className={styles.productLocation}>{props.cards}</div>
        </div>
        <Icon
          onClick={() => setIsFav(!isFav)}
          name={isFav ? "heart" : "heart outline"}
          className={styles.favIcon}
          size="large"
        />
      </div>
    </div>
  );
};

export default Product;
