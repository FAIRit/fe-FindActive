import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";
import styles from '../../styles/ProfileBtn.module.css';
import { NavLink } from 'react-router-dom'

const FavoritesBtn = () => {
  return (
    <div>
     <NavLink to="/favorites"> <FontAwesomeIcon
        icon={farFaHeart}
        className={styles.favoriteIcon}
      /></NavLink> 
    </div>
  );
};

export default FavoritesBtn;
