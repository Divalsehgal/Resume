import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <NavLink
        className="Nav_link"
        to="/"
        activeClassName="activeRoute"
        activeStyle={{ color: "#def2f1", textDecoration: "none" }}
      >
        Home
      </NavLink>

      <NavLink
        className="Nav_link"
        to="/projects"
        activeClassName="activeRoute"
        activeStyle={{ color: "#def2f1", textDecoration: "none" }}
      >
        Projects
      </NavLink>
    </div>
  );
};
export default Header;
