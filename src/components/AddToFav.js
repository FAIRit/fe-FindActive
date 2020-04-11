import React, {Component} from "react";
import { Icon } from "semantic-ui-react";
import styles from "../styles/Product.module.css";


const AddToFav = props => {

  return (
    <Icon
      onClick={props.onClick}
      name={props.isInFavorites ? "heart outline" : "heart"} 
      className={styles.favIcon}
      size="large"
    />
  );
};


export default AddToFav;
