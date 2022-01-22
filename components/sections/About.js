import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

import styles from '@/styles/About.module.scss';

function About() {
  return (
    <>
      <h1 className="header">About</h1>

      <p className="justify">
        My name is Vladimir and I was born on January 2nd 1999 in Užice, Serbia but today I live in Belgrade. I have a
        bachelor&apos;s degree in informatics from the Faculty of Mathematics, University of Belgrade and I&apos;m
        currently working on getting a master&apos;s degree. I have developed web (MEAN, MERN stack), desktop (C++) and
        Android (Java, Kotlin) apps by myself and in a group environment. My hobbies include tinkering with electronics
        (Arduino, ESP32 and Raspberry Pi) and Game Development.
      </p>

      <hr />

      <div className={styles.socialMenu}>
        <a href="documents/VladimirVuksanovicCV.pdf" target="_blank" className="btn btn-icon">
          <FontAwesomeIcon icon={faFile} /> Resume
        </a>
        <a href="mailto:vvuksanovic1999@gmail.com" className="btn btn-icon">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/vladimir-vuksanovic/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://github.com/VladimirV99" target="_blank" rel="noreferrer" className="btn btn-icon">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://gitlab.com/VladimirV99" target="_blank" rel="noreferrer" className="btn btn-icon">
          <FontAwesomeIcon icon={faGitlab} /> GitLab
        </a>
      </div>
    </>
  );
}

export default About;
