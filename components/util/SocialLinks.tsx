import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

import {
  email,
  linkedinName,
  linkedinUrl,
  githubName,
  githubUrl,
  gitlabName,
  gitlabUrl,
} from "@/data/contactInfo";

import styles from "@/styles/SocialLinks.module.scss";

function SocialLinks() {
  return (
    <ul className={styles.socials}>
      <li>
        <a
          href={`mailto:${email}`}
          title={`Email: ${email}`}
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          title={`LinkedIn: ${linkedinName}`}
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          title={`GitHub: ${githubName}`}
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href={gitlabUrl}
          target="_blank"
          rel="noreferrer"
          title={`GitLab: ${gitlabName}`}
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faGitlab} />
        </a>
      </li>
      <li>
        <a
          href="documents/VladimirVuksanovicCV.pdf"
          target="_blank"
          title="My CV"
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faFile} />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
