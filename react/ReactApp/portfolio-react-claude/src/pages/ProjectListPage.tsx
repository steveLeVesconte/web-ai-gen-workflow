

// src/pages/ProjectListPage.tsx

import React, { useState, useEffect } from 'react';
import { Project } from '../models/Project';
import { getPagedProjects, getTotalPages , getProjects} from '../services/ProjectDataService';
import ProjectRow from '../components/ProjectRow';
import './ProjectListPage.css';

const ProjectListPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    // In a real application, you would fetch projects from an API
    // For now, we'll use mock data
    //const mockProjects: Project[] = []; // Add your mock projects here
    const mockProjects: Project[] = getProjects(); // Add your mock projects here
    console.log('zz mockProjects:', mockProjects);
    setProjects(getPagedProjects(currentPage, pageSize, mockProjects));
    setTotalPages(getTotalPages(mockProjects.length, pageSize));
  }, [currentPage]);

  const handleViewMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main className="project-list-page">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
      {currentPage < totalPages && (
        <button className="view-more-button" onClick={handleViewMore}>
          View More
        </button>
      )}
    </main>
  );
};

export default ProjectListPage;


