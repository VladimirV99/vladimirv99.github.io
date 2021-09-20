import { Fragment } from 'react';

import './Education.css';

function Education() {
  return (
    <Fragment>
      <h1 className="header">Education</h1>

      <ul>
        <li>
          <div className="education-item">
            <div className="education-info">
              <p className="school-name">Faculty of Mathematics, University of Belgrade</p>
              <p>Master studies, Informatics</p>
            </div>
            <p className="colored">
              <i className="far fa-calendar-alt"></i> 2021-now
            </p>
          </div>
        </li>
        <li>
          <div className="education-item">
            <div className="education-info">
              <p className="school-name">Faculty of Mathematics, University of Belgrade</p>
              <p>Undergraduate studies, Informatics</p>
              <p>GPA 9.88/10.00</p>
            </div>
            <p className="colored">
              <i className="far fa-calendar-alt"></i> 2017-2021
            </p>
          </div>
        </li>
        <li>
          <div className="education-item">
            <div className="education-info">
              <p className="school-name">Užička gimnazija</p>
              <p>Natural Sciences and Mathematics</p>
            </div>
            <p className="colored">
              <i className="far fa-calendar-alt"></i> 2013-2017
            </p>
          </div>
        </li>
        {/* <li>
          <div className="education-item">
            <div className="education-info">
              <p className="school-name">Elementary School "Slobodan Sekulić"</p>
            </div>
            <p className="colored">
              <i className="far fa-calendar-alt"></i> 2005-2013
            </p>
          </div>
        </li> */}
      </ul>
    </Fragment>
  );
}

export default Education;
