import './App.css';
import './Button.css';

import Navbar from './Navbar';
import Project from './Project';
import projects from './projectList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <main>
        <hr />
        <h1 id="home" className="header">
          Vladimir <span className="colored">Vuksanović</span>
        </h1>
        <hr />

        <div className="social-menu">
          <a href="documents/cv.pdf" target="_blank" className="btn btn-icon">
            <i className="fas fa-file"></i> Resume
          </a>
          <a href="mailto:vladevuksan99@gmail.com" className="btn btn-icon">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://github.com/VladimirV99" target="_blank" rel="noreferrer" className="btn btn-icon">
            <i className="fab fa-github"></i> Github
          </a>
          <a href="https://gitlab.com/VladimirV99" target="_blank" rel="noreferrer" className="btn btn-icon">
            <i className="fab fa-gitlab"></i> Gitlab
          </a>
        </div>

        <hr />

        <h1 id="education" className="header">
          Education
        </h1>

        <ul>
          <li>
            <div className="education-item">
              <div className="education-info">
                <p className="school-name">Faculty of Mathematics, University of Belgrade</p>
                <p>Undergraduate studies, Informatics</p>
                <p>Fourth year</p>
                <p>GPA 9.83/10.00</p>
              </div>
              <p className="colored">
                <i className="far fa-calendar-alt"></i> 2017-now
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
          <li>
            <div className="education-item">
              <div className="education-info">
                <p className="school-name">Osnovna škola "Slobodan Sekulić"</p>
              </div>
              <p className="colored">
                <i className="far fa-calendar-alt"></i> 2005-2013
              </p>
            </div>
          </li>
        </ul>

        <hr />

        <h1 id="projects" className="header">
          Projects
        </h1>

        {projects.map((project, i) => {
          return (
            <Project
              key={i}
              name={project.name}
              description={project.description}
              tags={project.tags}
              url={project.url}
              slides={project.slides}
            ></Project>
          );
        })}

        <hr />

        <h1 id="contact" className="header">
          Contact Me
        </h1>

        <table id="contact-info">
          <tbody>
            <tr>
              <td className="center">
                <i className="far fa-big fa-envelope"></i>
              </td>
              <td>Email:</td>
              <td>vladevuksan99@gmail.com</td>
            </tr>
            <tr>
              <td className="center">
                <i className="fas fa-big fa-map-marker-alt"></i>
              </td>
              <td>Address:</td>
              <td>Užičkih heroja 27/1, Užice, Srbija</td>
            </tr>
            <tr>
              <td className="center">
                <i className="fas fa-big fa-phone"></i>
              </td>
              <td>Phone:</td>
              <td>(+381) 64 4438136</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
