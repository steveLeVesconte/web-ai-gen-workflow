import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div>&copy; 2024 Full Stack Developer</div>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
