import React from 'react';
import { Project } from '../models/Project';
import ProjectCard from './ProjectCard';
import './ProjectCardList.css';

interface ProjectCardListProps {
  projects: Project[];
}

const ProjectCardList: React.FC<ProjectCardListProps> = ({ projects }) => {
  return (
    <div className="project-card-list">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} isEven={index % 2 === 0} />
      ))}
    </div>
  );
};

export default ProjectCardList;
