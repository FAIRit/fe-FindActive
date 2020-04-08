import React from "react";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../layouts/Navbar";
import LoggedNavbar from "../layouts/LoggedNavbar";
import notfound from '../img/notfound.jpg';
import style from '../styles/NotFoundPage.module.css'

const NotFoundPage = () => {
  const isLoggedIn = useAuth();
  return (
    <div className={style.notFoundPage}>
      {isLoggedIn ? <LoggedNavbar /> : <Navbar />}
      <img className={style.notFoundImg} src={notfound} alt="Page not found" />
    </div>
  );
};

export default NotFoundPage;
