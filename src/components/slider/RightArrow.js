import React from 'react'
import styles from "../../styles/TopCategories.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      size={"2x"}
      style={{
        ...style,
        display: "block",
        cursor: "pointer"
      }}
      onClick={onClick}
      className={styles.next}
    />
  );
}

export default SampleNextArrow