import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <h1 className="header" onClick={() => window.scroll(0, 0)}>
      🍿 Entertainment Zone 🍿
    </h1>
  );
};

export default Header;
