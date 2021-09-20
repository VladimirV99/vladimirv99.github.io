import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ProjectLink from './ProjectLink';
import Slideshow from './Slideshow';

import './Project.scss';

function Project({ name, description, tags, url, slides }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const drawerClass = 'drawer' + (showDropdown ? ' active' : '');

  return (
    <article className="panel">
      <div className="panel-main">
        <h3 className="panel-title">{name}</h3>
        {description && <p className="justify">{description}</p>}
        {tags && (
          <ul className="tags">
            {tags.map((tag, i) => {
              return <li key={i}>{tag}</li>;
            })}
          </ul>
        )}
        {url && <ProjectLink>{url}</ProjectLink>}
      </div>

      {slides && (
        <div className="panel-extra">
          <div className={drawerClass}>
            <Slideshow slides={slides}></Slideshow>
          </div>

          {showDropdown ? (
            <div className="accordion" onClick={() => setShowDropdown(false)}>
              Show less
            </div>
          ) : (
            <div className="accordion" onClick={() => setShowDropdown(true)}>
              Show more
            </div>
          )}
        </div>
      )}
    </article>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default Project;
