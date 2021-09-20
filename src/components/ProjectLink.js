import PropTypes from 'prop-types';

import '../Button.css';

function ProjectLink({ children: url }) {
  if (url.startsWith('https://github.com/')) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="btn">
        <i className="mr fab fa-github"></i>View on GitHub
      </a>
    );
  } else if (url.startsWith('https://gitlab.com/')) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="btn">
        <i className="mr fab fa-gitlab"></i>View on GitLab
      </a>
    );
  } else {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="btn">
        <i className="mr fas fa-globe"></i>View Website
      </a>
    );
  }
}

ProjectLink.propTypes = {
  children: PropTypes.string.isRequired
};

export default ProjectLink;
