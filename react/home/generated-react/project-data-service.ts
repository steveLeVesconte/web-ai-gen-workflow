import { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    listPageDescription: 'A full-stack e-commerce solution with React and Node.js.',
    homePageDescription: 'Built a scalable e-commerce platform using React, Node.js, and MongoDB.',
    listPageImageUrl: 'https://picsum.photos/800/600?random=1',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=1',
    isFeatured: true,
    projectDate: new Date('2023-12-15'),
    isHidden: false,
    featureOrder: 1
  },
  {
    id: '2',
    title: 'Task Management App',
    listPageDescription: 'A React Native app for efficient task management.',
    homePageDescription: 'Developed a cross-platform task management app using React Native and Firebase.',
    listPageImageUrl: 'https://picsum.photos/800/600?random=2',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=2',
    isFeatured: true,
    projectDate: new Date('2023-10-20'),
    isHidden: false,
    featureOrder: 2
  },
  {
    id: '3',
    title: 'AI-powered Chatbot',
    listPageDescription: 'An intelligent chatbot using natural language processing.',
    homePageDescription: 'Created an AI-powered chatbot with Python and TensorFlow for customer support.',
    listPageImageUrl: 'https://picsum.photos/800/600?random=3',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=3',
    isFeatured: true,
    projectDate: new Date('2024-02-05'),
    isHidden: false,
    featureOrder: 3
  },
  {
    id: '4',
    title: 'Data Visualization Dashboard',
    listPageDescription: 'Interactive data visualizations using D3.js and React.',
    homePageDescription: 'Designed and implemented a dynamic data visualization dashboard with D3.js and React.',
    listPageImageUrl: 'https://picsum.photos/800/600?random=4',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=4',
    isFeatured: true,
    projectDate: new Date('2024-03-10'),
    isHidden: false,
    featureOrder: 4
  }
];

export const getProjects = (): Project[] => projects;

export const getFeaturedProjects = (): Project[] => {
  return projects
    .filter(project => project.isFeatured && !project.isHidden)
    .sort((a, b) => (a.featureOrder || 0) - (b.featureOrder || 0));
};
