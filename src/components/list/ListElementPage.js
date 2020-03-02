import React from "react";
import { Link } from "react-router-dom";
import Element from "./Element";

const ListElementPage = ({match}) => {
  return (
    <div>
      <Element name={match.params.name} />
      <Link to="/list">Back to list</Link>
    </div>
  );
};

export default ListElementPage;
