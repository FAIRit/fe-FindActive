import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import styles from "../styles/Product.module.css";

const AddToFav = () => {
  const [isFav, setIsFav] = useState(false);

  return (
    <Icon
      onClick={() => setIsFav(!isFav)}
      name={isFav ? "heart" : "heart outline"}
      className={styles.favIcon}
      size="large"
    />
  );
};

export default AddToFav;
