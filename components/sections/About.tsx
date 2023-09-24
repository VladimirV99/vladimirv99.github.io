import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

import aboutInfo from "@/data/aboutInfo";
import { email, linkedinUrl, githubUrl, gitlabUrl } from "@/data/contactInfo";

import styles from "@/styles/About.module.scss";

function About() {
  return (
    <>
      <h1 className="header">About</h1>

      <p className="justify">{aboutInfo}</p>

      <hr />

      <div className={styles.socialMenu}>
        <a
          href="documents/VladimirVuksanovicCV.pdf"
          target="_blank"
          className="btn btn-icon"
        >
          <FontAwesomeIcon icon={faFile} /> Resume
        </a>
        <a href={`mailto:${email}`} className="btn btn-icon">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-icon"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a
          href={gitlabUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-icon"
        >
          <FontAwesomeIcon icon={faGitlab} /> GitLab
        </a>
      </div>
    </>
  );
}

export default About;
