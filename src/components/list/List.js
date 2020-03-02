import React from "react";
import Navbar from "../../layouts/Navbar";
import SearchBar from "../SearchBar";
import ListElement from "./ListElement";
import premium from "../../img/premium.jpg";
import tonezone from "../../img/tonezone.jpg";

export let list = [
  {
    id: 1,
    name: "Premium Gym Rumia",
    location: "Rumia, pomorskie",
    type: "siłownia",
    photo:  premium 
  },
  {
    id: 2,
    name: "ToneZone",
    location: "Gdańsk, pomorskie",
    type: "siłownia",
    photo:  tonezone 
  }
];

const List = () => {
  const gymList = list.map(el => (
    <div key={el.id}>
        <ListElement {...el} />
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

export default List;
