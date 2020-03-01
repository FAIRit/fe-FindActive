import React from "react";
import Logo from "../components/Logo";
import LoginBtn from "../components/LoginBtn";
import RegisterBtn from "../components/RegisterBtn";

const Navbar = () => {
  return (
    <div>
      <Logo />
      <LoginBtn />
      <RegisterBtn />
    </div>
  );
};

export default Navbar;
