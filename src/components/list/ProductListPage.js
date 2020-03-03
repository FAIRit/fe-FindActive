import React from "react";
import Navbar from "../../layouts/Navbar";
import SearchBar from "../SearchBar";
import premium from "../../img/premium.jpg";
import tonezone from "../../img/tonezone.jpg";
import { Link } from "react-router-dom";

export let list = [
  {
    id: 1,
    name: "Premium Gym Rumia",
    location: "Rumia, pomorskie",
    type: "siłownia",
    photo: premium
  },
  {
    id: 2,
    name: "ToneZone",
    location: "Gdańsk, pomorskie",
    type: "siłownia",
    photo: tonezone
  }
];

const ProductListPage = () => {
  const gymList = list.map(el => (
    <div key={el.id}>
      <Link to={`product/${el.id}`}>
        <img
          src={el.photo}
          style={{ width: "500px", height: "300px" }}
          alt="gym photo"
        ></img>
        <div>{el.name}</div>
        <div>{el.type}</div>
        <div>{el.location}</div>
      </Link>
    </div>
  ));
  return (
    <div>
      <Navbar />
      <SearchBar />
      {gymList}
    </div>
  );
};

export default ProductListPage;