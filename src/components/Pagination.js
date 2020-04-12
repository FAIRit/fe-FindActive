import React from "react";


const Paginationn = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <div
              onClick={() => 
                paginate(number)
              }
              style={{ color: "white" }}
            >
              {number}

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paginationn;
