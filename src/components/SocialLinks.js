import React from 'react';
import './SocialLinks.scss';

function SocialLinks() {
  return (
    <ul className="socials">
      <li>
        <a href="mailto:vladevuksan99@gmail.com" title="Email: vladevuksan99@gmail.com" className="social-link">
          <i className="fas fa-envelope"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/vladimir-vuksanovic/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn: vladimir-vuksanovic"
          className="social-link"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/VladimirV99"
          target="_blank"
          rel="noreferrer"
          title="GitHub: VladimirV99"
          className="social-link"
        >
          <i className="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a
          href="https://gitlab.com/VladimirV99"
          target="_blank"
          rel="noreferrer"
          title="GitLab: VladimirV99"
          className="social-link"
        >
          <i className="fab fa-gitlab"></i>
        </a>
      </li>
      <li>
        <a href="documents/VladimirVuksanovicCV.pdf" target="_blank" title="My CV" className="social-link">
          <i className="fas fa-file"></i>
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
