// src/components/ProjectRow.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../models/Project';
import './ProjectRow.css';

interface ProjectRowProps {
  project: Project;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
  return (
    <div className="project-row">
      <div className="project-info">
        <h2>{project.title}</h2>
        <p>{project.listPageDescription}</p>
        <Link to={`/projects/${project.id}`} className="view-project-button">
          View Project
        </Link>
      </div>
      <div className="project-image">
        <img src={project.listPageImageUrl} alt={project.title} />
      </div>
    </div>
  );
};

export default ProjectRow;