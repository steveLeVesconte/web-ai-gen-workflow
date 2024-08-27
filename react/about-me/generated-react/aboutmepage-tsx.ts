import React from "react";
import "./AboutMePage.css";

const AboutMePage: React.FC = () => {
  return (
    <div className="about-me-page">
      <h1>About Me</h1>
      <h2>Full Stack Developer</h2>
      <img
        src="https://picsum.photos/1200/600"
        alt="Full Stack Developer at work"
        className="article-image"
      />
      <p className="caption">A day in the life of a Full Stack Developer</p>
      <p>
        Hello! I'm a passionate Full Stack Developer with expertise in both front-end and back-end technologies. My journey in the world of web development has been an exciting adventure, filled with continuous learning and problem-solving.
      </p>
      <h3>My Skills</h3>
      <ul>
        <li>Front-end: React, TypeScript, HTML5, CSS3, JavaScript</li>
        <li>Back-end: Node.js, Express, Python, Django</li>
        <li>Databases: MongoDB, PostgreSQL, MySQL</li>
        <li>DevOps: Docker, AWS, CI/CD pipelines</li>
        <li>Version Control: Git, GitHub</li>
      </ul>
      <p>
        I'm always eager to take on new challenges and expand my skill set. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts.
      </p>
      <h3>Let's Connect</h3>
      <p>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through the contact page or connect with me on LinkedIn and GitHub.
      </p>
    </div>
  );
};

export default AboutMePage;
