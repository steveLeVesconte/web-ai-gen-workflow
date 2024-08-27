import { Project } from '../models/Project';


export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Chat Application',
    listPageDescription: 'The AI-Powered Chat Application is a cutting-edge communication tool that leverages artificial intelligence to enhance user interactions.',
    homePageDescription: 'The AI-Powered Chat Application is a cutting-edge communication tool that leverages artificial intelligence to enhance user interactions.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=1',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=1',
    isFeatured: true,
    projectDate: new Date('2023-12-15'),
    isHidden: false,
    featureOrder: 1
  },
  {
    id: '2',
    title: 'Task Management App',
    listPageDescription: 'A collaborative task management application built with Vue.js and Firebase.',
    homePageDescription: 'Developed a real-time task management app for teams using Vue.js and Firebase.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=2',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=2',
    isFeatured: true,
    projectDate: new Date('2023-11-20'),
    isHidden: false,
    featureOrder: 2
  },
  {
    id: '3',
    title: 'Weather Forecast Dashboard',
    listPageDescription: 'A responsive weather dashboard using React and OpenWeatherMap API.',
    homePageDescription: 'Created an interactive weather forecast dashboard with React, featuring real-time data from OpenWeatherMap API.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=3',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=3',
    isFeatured: false,
    projectDate: new Date('2023-10-05'),
    isHidden: false,
    featureOrder: 21
  }
  
  
/*   ,
  {
    id: '4',
    title: 'Social Media Analytics Tool',
    listPageDescription: 'A data visualization tool for social media metrics using D3.js and Express.',
    homePageDescription: 'Developed a comprehensive social media analytics tool with D3.js for visualization and Express for backend services.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=4',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=4',
    isFeatured: true,
    projectDate: new Date('2023-09-12'),
    isHidden: false,
    featureOrder: 3
  },
  {
    id: '5',
    title: 'Online Learning Platform',
    listPageDescription: 'An educational platform built with Django and React.',
    homePageDescription: 'Created a feature-rich online learning platform using Django for backend and React for frontend, supporting video courses and quizzes.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=5',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=5',
    isFeatured: false,
    projectDate: new Date('2023-08-18'),
    isHidden: false,
    featureOrder: 22
  },
  {
    id: '6',
    title: 'Inventory Management System',
    listPageDescription: 'A robust inventory system using Angular and Spring Boot.',
    homePageDescription: 'Designed and implemented a scalable inventory management system with Angular frontend and Spring Boot backend.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=6',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=6',
    isFeatured: false,
    projectDate: new Date('2023-07-22'),
    isHidden: false,
    featureOrder: 23
  },
  {
    id: '7',
    title: 'Fitness Tracking Mobile App',
    listPageDescription: 'A cross-platform fitness app developed with React Native and Firebase.',
    homePageDescription: 'Built a comprehensive fitness tracking mobile application using React Native and Firebase, featuring workout plans and progress tracking.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=7',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=7',
    isFeatured: true,
    projectDate: new Date('2023-06-30'),
    isHidden: false,
    featureOrder: 4
  },
  {
    id: '8',
    title: 'Real Estate Listing Portal',
    listPageDescription: 'A property listing website built with Next.js and Strapi CMS.',
    homePageDescription: 'Developed a modern real estate listing portal using Next.js for frontend and Strapi as a headless CMS.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=8',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=8',
    isFeatured: false,
    projectDate: new Date('2023-05-15'),
    isHidden: false,
    featureOrder: 24
  },
  {
    id: '9',
    title: 'Blockchain Voting System',
    listPageDescription: 'A secure voting system using Ethereum smart contracts and React.',
    homePageDescription: 'Implemented a decentralized voting system leveraging Ethereum blockchain technology with a React frontend.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=9',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=9',
    isFeatured: true,
    projectDate: new Date('2023-04-20'),
    isHidden: false,
    featureOrder: 5
  },
  {
    id: '10',
    title: 'AI-powered Chatbot',
    listPageDescription: 'A customer service chatbot using NLP and React.',
    homePageDescription: 'Developed an AI-powered chatbot for customer service using natural language processing and a React frontend.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=10',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=10',
    isFeatured: false,
    projectDate: new Date('2023-03-10'),
    isHidden: false,
    featureOrder: 25
  },
  {
    id: '11',
    title: 'Collaborative Whiteboard App',
    listPageDescription: 'A real-time collaborative whiteboard using Socket.io and Canvas API.',
    homePageDescription: 'Built a real-time collaborative whiteboard application using Socket.io for real-time communication and HTML5 Canvas for drawing.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=11',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=11',
    isFeatured: false,
    projectDate: new Date('2023-02-05'),
    isHidden: false,
    featureOrder: 26
  },
  {
    id: '12',
    title: 'Personal Finance Tracker',
    listPageDescription: 'A budget management app with React and Chart.js.',
    homePageDescription: 'Designed and developed a personal finance tracking application using React for UI and Chart.js for visual representation of financial data.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=12',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=12',
    isFeatured: false,
    projectDate: new Date('2023-01-15'),
    isHidden: false,
    featureOrder: 27
  },
  {
    id: '13',
    title: 'Job Board Platform',
    listPageDescription: 'A job listing and application platform using Ruby on Rails and React.',
    homePageDescription: 'Created a comprehensive job board platform with Ruby on Rails backend and React frontend, featuring job postings and applications.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=13',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=13',
    isFeatured: false,
    projectDate: new Date('2022-12-20'),
    isHidden: false,
    featureOrder: 28
  },
  {
    id: '14',
    title: 'IoT Home Automation System',
    listPageDescription: 'A home automation system using Raspberry Pi, Node.js, and React.',
    homePageDescription: 'Developed an IoT-based home automation system using Raspberry Pi for hardware control, Node.js for backend, and React for the frontend dashboard.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=14',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=14',
    isFeatured: true,
    projectDate: new Date('2022-11-30'),
    isHidden: false,
    featureOrder: 6
  },
  {
    id: '15',
    title: 'Music Streaming Service',
    listPageDescription: 'A Spotify-like music streaming app using MERN stack.',
    homePageDescription: 'Built a feature-rich music streaming service using the MERN (MongoDB, Express, React, Node.js) stack with audio playback and playlist management.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=15',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=15',
    isFeatured: false,
    projectDate: new Date('2022-10-10'),
    isHidden: false,
    featureOrder: 29
  },
  {
    id: '16',
    title: 'Augmented Reality Product Viewer',
    listPageDescription: 'An AR product visualization app using React Native and ARKit.',
    homePageDescription: 'Developed an augmented reality product viewer mobile app using React Native and ARKit, allowing users to visualize products in their environment.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=16',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=16',
    isFeatured: true,
    projectDate: new Date('2022-09-05'),
    isHidden: false,
    featureOrder: 7
  },
  {
    id: '17',
    title: 'Crowdfunding Platform',
    listPageDescription: 'A crowdfunding website built with Laravel and Vue.js.',
    homePageDescription: 'Created a crowdfunding platform using Laravel for backend operations and Vue.js for a dynamic frontend, including payment integration.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=17',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=17',
    isFeatured: false,
    projectDate: new Date('2022-08-15'),
    isHidden: false,
    featureOrder: 30
  },
  {
    id: '18',
    title: 'Multiplayer Online Game',
    listPageDescription: 'A real-time multiplayer game using Phaser.js and Socket.io.',
    homePageDescription: 'Developed a real-time multiplayer online game using Phaser.js for game engine and Socket.io for real-time communication between players.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=18',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=18',
    isFeatured: false,
    projectDate: new Date('2022-07-20'),
    isHidden: false,
    featureOrder: 31
  },
  {
    id: '19',
    title: 'Content Management System',
    listPageDescription: 'A custom CMS built with ASP.NET Core and Angular.',
    homePageDescription: 'Designed and implemented a flexible content management system using ASP.NET Core for backend and Angular for the admin interface.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=19',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=19',
    isFeatured: false,
    projectDate: new Date('2022-06-10'),
    isHidden: false,
    featureOrder: 32
  },
  {
    id: '20',
    title: 'Supply Chain Management System',
    listPageDescription: 'An enterprise-level supply chain solution using Java Spring and React.',
    homePageDescription: 'Developed a comprehensive supply chain management system using Java Spring for backend services and React for a responsive frontend interface.',
    listPageImageUrl: 'https://picsum.photos/300/200?random=20',
    homePageImageUrl: 'https://picsum.photos/1200/800?random=20',
    isFeatured: true,
    projectDate: new Date('2022-05-01'),
    isHidden: false,
    featureOrder: 8
  } */
];







export const projects_o: Project[] = [
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



export const  getNextProject = (currentProjectId: string): Project | null  => {
  const projects = getProjects();
  const sortedProjects = projects
    .filter(p => !p.isHidden)
    .sort((a, b) => (a.featureOrder || Infinity) - (b.featureOrder || Infinity));
  
  const currentIndex = sortedProjects.findIndex(p => p.id === currentProjectId);
  if (currentIndex === -1 || currentIndex === sortedProjects.length - 1) {
    return null;
  }
  let nextIndex = currentIndex + 1;
  if (nextIndex >= sortedProjects.length) {
    nextIndex = 0;
  } 
  return sortedProjects[nextIndex];
}

export const getPreviousProject = (currentProjectId: string): Project | null => {
  const projects = getProjects();
  const sortedProjects = projects
    .filter(p => !p.isHidden)
    .sort((a, b) => (a.featureOrder || Infinity) - (b.featureOrder || Infinity));
  
  let currentIndex = sortedProjects.findIndex(p => p.id === currentProjectId)-1;
  if (currentIndex === -1 || currentIndex === 0) {
    currentIndex = sortedProjects.length;
  }
  
  return sortedProjects[currentIndex];
}


export const getPagedProjects = (
  page: number,
  pageSize: number,
  projects: Project[]
): Project[] => {
  const sortedProjects = projects
  .filter(p => !p.isHidden)
  .sort((a, b) => (a.featureOrder || Infinity) - (b.featureOrder || Infinity));

  const startIndex = (page - 1) * pageSize;
  return sortedProjects.slice(startIndex, startIndex + pageSize);
};

export const getTotalPages = (totalProjects: number, pageSize: number): number => {
  return Math.ceil(totalProjects / pageSize);
};