import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

import styles from '@/styles/SocialLinks.module.scss';

function SocialLinks() {
  return (
    <ul className={styles.socials}>
      <li>
        <a
          href="mailto:vvuksanovic1999@gmail.com"
          title="Email: vvuksanovic1999@gmail.com"
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/vladimir-vuksanovic/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn: vladimir-vuksanovic"
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/VladimirV99"
          target="_blank"
          rel="noreferrer"
          title="GitHub: VladimirV99"
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://gitlab.com/VladimirV99"
          target="_blank"
          rel="noreferrer"
          title="GitLab: VladimirV99"
          className={styles.socialLink}
        >
          <FontAwesomeIcon icon={faGitlab} />
        </a>
      </li>
      <li>
        <a href="documents/VladimirVuksanovicCV.pdf" target="_blank" title="My CV" className={styles.socialLink}>
          <FontAwesomeIcon icon={faFile} />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
