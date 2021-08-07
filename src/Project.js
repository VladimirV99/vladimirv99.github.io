import React, { Fragment, useState } from 'react';

import ProjectLink from './ProjectLink';
import Slideshow from './Slideshow';

import './Project.css';

function Project(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const drawerClass = 'drawer' + (showDropdown ? ' active' : '');

  return (
    <article className="panel">
      <div className="panel-header">
        <h3 className="panel-title">{props.name}</h3>
        <p>{props.description}</p>
        <ul className="tags">
          {props.tags.map((tag, i) => {
            return <li key={i}>{tag}</li>;
          })}
        </ul>
        <ProjectLink>{props.url}</ProjectLink>
      </div>

      {props.slides ? (
        <Fragment>
          <div className={drawerClass}>
            <Slideshow slides={props.slides}></Slideshow>
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
        </Fragment>
      ) : null}
    </article>
  );
}

export default Project;
