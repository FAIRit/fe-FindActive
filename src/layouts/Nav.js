import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
    <nav>
        Nav
        <NavLink to="/">Home</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/list">List</NavLink>
        <NavLink to="/privacy">PrivacyPolicy</NavLink>
    </nav>
)

export default Nav;
