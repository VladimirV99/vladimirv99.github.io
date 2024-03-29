import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import {
  email,
  linkedinName,
  linkedinUrl,
  githubName,
  githubUrl,
  gitlabName,
  gitlabUrl,
} from "@/data/contactInfo";

import styles from "@/styles/Contact.module.scss";

function Contact() {
  return (
    <>
      <h1 className="header">Contact Me</h1>

      <table id={styles.contactInfo}>
        <tbody>
          <tr>
            <td className="center">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </td>
            <td className="center">Email:</td>
            <td>
              <a href={`mailto:${email}`}>{email}</a>
            </td>
          </tr>
          <tr>
            <td className="center">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </td>
            <td className="center">LinkedIn:</td>
            <td>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                {linkedinName}
              </a>
            </td>
          </tr>
          <tr>
            <td className="center">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </td>
            <td className="center">GitHub:</td>
            <td>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                {githubName}
              </a>
            </td>
          </tr>
          <tr>
            <td className="center">
              <FontAwesomeIcon icon={faGitlab} size="lg" />
            </td>
            <td className="center">GitLab:</td>
            <td>
              <a href={gitlabUrl} target="_blank" rel="noreferrer">
                {gitlabName}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Contact;
