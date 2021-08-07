import './Button.css';

function ProjectLink(props) {
  const url = props.children;

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

export default ProjectLink;
