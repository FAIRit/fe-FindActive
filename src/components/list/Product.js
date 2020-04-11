import React from "react";
import styles from "../../styles/Product.module.css";
import { Link } from "react-router-dom";
import AddToFav from '../../components/AddToFav'

const Product = (props) => {
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
        <AddToFav />
      </div>
    </div>
  );
};

export default Product;


// onClick={() => addToFav(firebase.auth().currentUser)}

// import { addToFav } from '../../services/AddToFavService';
// import firebase from '../../firebase/firebase'
