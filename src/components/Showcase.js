import React from "react";
import styles from "../styles/Showcase.module.css";
import Navbar from "../layouts/Navbar";
import LoggedNavbar from "../layouts/LoggedNavbar";
import MainInfo from "./MainInfo";
import Faq from "./Faq";
import CenterMode from "./slider/CenterMode";
import { useAuth } from "../hooks/useAuth";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const Showcase = () => {
  const isLoggedIn = useAuth();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.showcase}>
          {isLoggedIn ? <LoggedNavbar /> : <Navbar />}
          <span className={styles.title}>
            {" "}
            Wyszukuj obiektów sportowych. Zrób trening, gdziekolwiek jesteś.{" "}
          </span>
          <span className={styles.secondTitle}>
            Trenowanie nigdy nie było łatwiejsze.
          </span>
          <NavLink to="/products">
            <button className={styles.showcaseBtn}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Wyszukaj <Icon name="arrow right" />
              </div>
            </button>
          </NavLink>
        </div>
      </div>
      <MainInfo />
      <div>
        {" "}
        <CenterMode />
      </div>
      <Faq />
    </div>
  );
};

export default Showcase;
