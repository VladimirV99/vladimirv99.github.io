import { Fragment } from 'react';

import './About.scss';

function About() {
  return (
    <Fragment>
      <h1 className="header">About</h1>

      <p className="justify">
        My name is Vladimir and I was born on January 2nd 1999 in Užice, Serbia but today I live in Belgrade. I have a
        bachelor's degree in informatics from the Faculty of Mathematics, University of Belgrade and I'm currently
        working on getting a master's degree. I have developed web (MEAN, MERN stack), desktop (C++) and Android (Java,
        Kotlin) apps by myself and in a group environment. My hobbies include tinkering with electronics (Arduino, ESP32
        and Raspberry Pi) and Game Development.
      </p>

      <hr />

      <div className="social-menu">
        <a href="documents/VladimirVuksanovicCV.pdf" target="_blank" className="btn btn-icon">
          <i className="fas fa-file"></i> Resume
        </a>
        <a href="mailto:vvuksanovic1999@gmail.com" className="btn btn-icon">
          <i className="fas fa-envelope"></i> Email
        </a>
        <a
          href="https://www.linkedin.com/in/vladimir-vuksanovic/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-icon"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/VladimirV99" target="_blank" rel="noreferrer" className="btn btn-icon">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://gitlab.com/VladimirV99" target="_blank" rel="noreferrer" className="btn btn-icon">
          <i className="fab fa-gitlab"></i> GitLab
        </a>
      </div>
    </Fragment>
  );
}

export default About;
