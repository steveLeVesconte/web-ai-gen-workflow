import React from 'react';
import { getFeaturedProjects } from '../services/ProjectDataService';
import ProjectCardList from '../components/ProjectCardList';
import './HomePage.css';

const HomePage: React.FC = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="home-page">
      <div className="hero-image">
        <img src="https://picsum.photos/3200/600" alt="Hero Image" />
      </div>
      <main className="main-content">
        <h1>John Doe's Portfolio</h1>
        <p className="intro-paragraph">
          Welcome to my portfolio! I'm a passionate full-stack developer with expertise in React, Node.js, and modern web technologies. Below are some of my featured projects.
        </p>
        <ProjectCardList projects={featuredProjects} />
      </main>
    </div>
  );
};

export default HomePage;
