import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-content">
        <Link to="/" className="brand-title">
          John Doe - Full Stack Dev
        </Link>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
