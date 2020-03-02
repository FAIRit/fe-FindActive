import React from "react";
import { Link } from "react-router-dom";
const ListElement = props => {
  return (
    <div>
      <Link to={`/product/${props.id}`}>
        <img
          src={props.photo}
          style={{ width: "500px", height: "300px" }}
          alt="gym photo"
        ></img>
        <div>{props.name}</div>
        <div>{props.location}</div>
      </Link>
    </div>
  );
};

export default ListElement;
