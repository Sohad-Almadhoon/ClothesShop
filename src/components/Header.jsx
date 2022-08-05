import React, { useState } from "react";
import "../style.css";
import logo from "../img/logo.png";
function Header() {
  const [open, openMenu] = useState(0);
  function openmenu() {
    openMenu(!open);
  }
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img className="logo" src={logo}  alt="logo"/>
        </div>
        <ul className="navbar">
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i class="fa-solid fa-right-from-bracket"></i>
          </li>
        </ul>
        <i class="fa-solid fa-bars fa-2x" onClick={openmenu}></i>
        <ul
          className="menu"
          style={open ? { display: "block" } : { display: "none" }}
        >
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i class="fa-solid fa-right-from-bracket"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
