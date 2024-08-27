import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="desktop-menu">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
          <li><NavLink to="/projectList">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ≡
      </button>
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <button className="close-menu" onClick={toggleMenu}>
          ×
        </button>
        <ul>
          <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={toggleMenu}>About Me</NavLink></li>
          <li><NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink></li>
          <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
