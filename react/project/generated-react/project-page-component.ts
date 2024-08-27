import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProjectService } from '../services/ProjectService';
import { Project } from '../models/Project';
import './ProjectPages.css';

const ProjectPage0001: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project: Project = {
    id: '0001',
    title: 'AI-Powered Chat Application',
    listPageDescription: 'A real-time chat application with AI-powered features',
    homePageDescription: 'Revolutionizing communication with AI',
    listPageImageUrl: 'https://picsum.photos/800/400?random=1',
    homePageImageUrl: 'https://picsum.photos/1200/600?random=1',
    isFeatured: true,
    projectDate: new Date('2023-12-15'),
    isHidden: false,
    featureOrder: 1
  };

  const handleNextProject = () => {
    const nextProject = ProjectService.getNextProject(project.id);
    if (nextProject) {
      navigate(`/projects/${nextProject.id}`);
    }
  };

  const handlePreviousProject = () => {
    const previousProject = ProjectService.getPreviousProject(project.id);
    if (previousProject) {
      navigate(`/projects/${previousProject.id}`);
    }
  };

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <p className="project-date">Completed on: {project.projectDate.toLocaleDateString()}</p>
      
      <img src={project.homePageImageUrl} alt={project.title} className="article-image" />
      <p className="caption">AI-Powered Chat Application Interface</p>

      <h2>Project Overview</h2>
      <p>
        The AI-Powered Chat Application is a cutting-edge communication tool that leverages
        artificial intelligence to enhance user interactions. This project aimed to create
        a seamless, intuitive platform that goes beyond traditional messaging apps by
        incorporating smart features and predictive capabilities.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>Real-time messaging with end-to-end encryption</li>
        <li>AI-powered smart replies and message suggestions</li>
        <li>Natural language processing for context-aware responses</li>
        <li>Automated language translation for cross-lingual communication</li>
        <li>Sentiment analysis to gauge conversation tone</li>
      </ul>

      <h3>Technical Implementation</h3>
      <p>
        The application was built using a modern tech stack, including React for the frontend,
        Node.js and Express for the backend, and MongoDB for data storage. We integrated
        OpenAI's GPT-3 API to power the AI features, ensuring high-quality language understanding
        and generation.
      </p>

      <img src="https://picsum.photos/800/400?random=2" alt="Technical Architecture Diagram" className="article-image" />
      <p className="caption">High-level architecture of the AI-Powered Chat Application</p>

      <h3>Challenges and Solutions</h3>
      <p>
        One of the main challenges we faced was ensuring real-time performance while processing
        AI requests. We implemented a clever caching system and asynchronous processing to
        maintain low latency in message delivery while still providing AI-enhanced features.
      </p>

      <h3>Results and Impact</h3>
      <p>
        The application has seen rapid adoption since its launch, with over 100,000 active users
        in the first month. User feedback has been overwhelmingly positive, with many praising
        the intuitive AI features and smooth user experience.
      </p>

      <div className="project-navigation">
        <button onClick={handlePreviousProject} className="nav-button">Previous Project</button>
        <button onClick={handleNextProject} className="nav-button">Next Project</button>
      </div>
    </div>
  );
};

export default ProjectPage0001;
