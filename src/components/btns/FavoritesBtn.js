import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";
import styles from '../../styles/ProfileBtn.module.css'

const FavoritesBtn = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={farFaHeart}
        size={"2x"}
        className={styles.favoriteIcon}
      />
    </div>
  );
};

export default FavoritesBtn;
