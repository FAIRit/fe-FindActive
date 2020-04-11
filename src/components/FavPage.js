import React from "react";
import { useAuth } from "../hooks/useAuth";
import LoggedNavbar from "../layouts/LoggedNavbar";
import Navbar from "../layouts/Navbar";

const FavPage = () => {
  const isLoggedIn = useAuth();

  return (
    <div>
      {isLoggedIn ? <LoggedNavbar /> : <Navbar />}
      FavPage
    </div>
  );
};

export default FavPage;
