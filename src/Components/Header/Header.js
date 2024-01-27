import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <p>Skill Tester</p>
      </div>
      <nav className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/stat">Statistics</NavLink>
        <NavLink to="/blog">Blogs</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
};

export default Header;
