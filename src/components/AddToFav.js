import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import styles from "../styles/Product.module.css";

const AddToFav = props => {

  return (
    <Icon
      onClick={props.onClick}
    //   name={isFav ? "heart" : "heart outline"}
    name="heart"
      className={styles.favIcon}
      size="large"
    />
  );
};

export default AddToFav;
