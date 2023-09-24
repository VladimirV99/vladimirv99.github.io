import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitlab,
  faBitbucket,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function ProjectLink({ children: url }: { children: string }) {
  if (url.startsWith("https://github.com/")) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="btn">
        <FontAwesomeIcon icon={faGithub} className="mr" />
        View on GitHub
      </a>
    );
  } else if (url.startsWith("https://gitlab.com/")) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="btn">
        <FontAwesomeIcon icon={faGitlab} className="mr" />
        View on GitLab
      </a>
    );
  } else if (url.startsWith("https://bitbucket.org/")) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="btn">
        <FontAwesomeIcon icon={faBitbucket} className="mr" />
        View on BitBucket
      </a>
    );
  } else {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="btn">
        <FontAwesomeIcon icon={faGlobe} className="mr" />
        View Website
      </a>
    );
  }
}

export default ProjectLink;
