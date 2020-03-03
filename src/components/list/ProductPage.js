import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import Navbar from "../../layouts/Navbar";


const ProductPage = ({ match }) => {
  return (
    <>
      <Navbar />
      <div>Strona produktu</div>
      <Product id={match.params.id} />
      <Link to="/products">back to list</Link>
    </>
  );
};



export default ProductPage;
