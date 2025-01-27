import React from "react";
import headerLogo from "../../assets/header.png";
import "./header.css";

const Header: React.FC = () => (
  <header>
    <div className="header">
      <div className="logo">
        <img src={headerLogo} alt="Big Picture" />
      </div>
    </div>
  </header>
);

export default Header;
