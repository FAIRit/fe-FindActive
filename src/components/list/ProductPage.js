import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

const ProductPage = props => {
  return (
    <>
      <div>Strona produktu</div>
      <Product name={props.name} />
      <Link to="/list">back to list</Link>
    </>
  );
};

export default ProductPage;
