import React from "react";
import Button from "../button/Button";
import "./header.css";
import Logo from "../../img/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
        <Button />
      </div>
    </header>
  );
};

export default Header;
