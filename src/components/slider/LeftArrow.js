import React from 'react'
import styles from "../../styles/TopCategories.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function SamplePrevArrow(props) {
    const { onClick, style } = props;
    return (
      <FontAwesomeIcon
        icon={faChevronLeft}
        size={"2x"}
        style={{
          ...style
        }}
        className={styles.prev}
        onClick={onClick}
      />
    );
  }

export default SamplePrevArrow