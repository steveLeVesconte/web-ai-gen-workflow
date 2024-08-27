import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="hero-image">
        <img src="https://picsum.photos/3200/600" alt="Hero Image" />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
