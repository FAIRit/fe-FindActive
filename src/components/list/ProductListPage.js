import React, { useState, useEffect } from "react";
import Navbar from "../../layouts/Navbar";
import premium from "../../img/premium.jpg";
import tonezone from "../../img/tonezone.jpg";
import { Link } from "react-router-dom";
import { displayClubs, stopClubs } from "../services/ClubService";
import Product from './Product'
import SearchBar from "../SearchBar";


const ProductListPage = () => {
  const [clubsFB, setClubsFB] = useState([]);
  useEffect(() => {
    displayClubs(clubsFB => {
      setClubsFB(clubsFB);
    });

    return () => {
      stopClubs();
    };
  }, []);

const list = clubsFB.map(product => (
    <div key={product.id}>
    <Link to={`/product/${product.id}`}>
    <img src={product.photo} style={{width: '400px', height: "200px"}} alt='club photo'/>
    <Product {...product} src={product.imageUrl} />
    </Link>
    </div>
))

return (
    <div>
        <Navbar/>
        <SearchBar/>
        <div>{list}</div>
    </div>
);
}


export default ProductListPage;