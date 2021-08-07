import { Fragment } from 'react';

import './About.css';

function About() {
  return (
    <Fragment>
      <hr />

      <h1 id="name" className="header">
        Vladimir <span className="colored">Vuksanović</span>
      </h1>

      <hr />

      <div className="social-menu">
        <a href="documents/cv.pdf" target="_blank" className="btn btn-icon">
          <i className="fas fa-file"></i> Resume
        </a>
        <a href="mailto:vladevuksan99@gmail.com" className="btn btn-icon">
          <i className="fas fa-envelope"></i> Email
        </a>
        <a href="https://github.com/VladimirV99" target="_blank" rel="noreferrer" className="btn btn-icon">
          <i className="fab fa-github"></i> Github
        </a>
        <a href="https://gitlab.com/VladimirV99" target="_blank" rel="noreferrer" className="btn btn-icon">
          <i className="fab fa-gitlab"></i> Gitlab
        </a>
      </div>

      <hr />
    </Fragment>
  );
}

export default About;
