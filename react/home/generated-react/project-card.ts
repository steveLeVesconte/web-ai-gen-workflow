import React from 'react';
import { Project } from '../types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  isEven: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isEven }) => {
  return (
    <div className={`project-card ${isEven ? 'even' : 'odd'}`}>
      <div className="project-card-image">
        <img src={project.homePageImageUrl} alt={project.title} />
      </div>
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.homePageDescription}</p>
        <a href={`/projects/${project.id}`} className="button primary">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
