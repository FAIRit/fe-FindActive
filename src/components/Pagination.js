import React from "react";
import styles from "../styles/ProductListPage.module.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.paginationNumbers}>
      {pageNumbers.map((number) => (
        <div
        className={styles.paginationNumber}
          key={number}
          onClick={() => paginate(number)}
          style={{ color: "white" }}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
