import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutMePage from "./pages/AboutMePage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage"; // Import the new ProjectPage component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutMePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects/:id" element={<ProjectPage />} /> {/* Route for project pages */}
          {/* Add more routes here as needed */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
