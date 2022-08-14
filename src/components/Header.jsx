import React, { useState } from "react";
import "../style.css";
import { NavLink , Link} from "react-router-dom";
import logo from "../img/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
function Header() {
  const [open, openMenu] = useState(0);
  const [active, isActive] = useState(0);
  function handleClick() {
    isActive(!active);
  }
  function openmenu() {
    openMenu(!open);
  }
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul className="navbar">
          <li>
            <NavLink
              to="/"
              className={"nav-link" + (isActive && "active")}
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <LogoutIcon />
          </li>
        </ul>
        <MenuOpenIcon onClick={openmenu} className ="bar"/>
        <ul
          className="menu"
          style={open ? { display: "block" } : { display: "none" }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <LogoutIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
