import { Fragment } from 'react';

import './Contact.scss';

function Contact() {
  return (
    <Fragment>
      <h1 className="header">Contact Me</h1>

      <table id="contact-info">
        <tbody>
          <tr>
            <td className="center">
              <i className="far fa-big fa-envelope"></i>
            </td>
            <td className="center">Email:</td>
            <td>vladevuksan99@gmail.com</td>
          </tr>
          <tr>
            <td className="center">
              <i className="fab fa-big fa-github"></i>
            </td>
            <td className="center">GitHub:</td>
            <td>VladimirV99</td>
          </tr>
          <tr>
            <td className="center">
              <i className="fab fa-big fa-gitlab"></i>
            </td>
            <td className="center">GitLab:</td>
            <td>VladimirV99</td>
          </tr>
          <tr>
            <td className="center">
              <i className="fas fa-big fa-phone"></i>
            </td>
            <td className="center">Phone:</td>
            <td>(+381) 64 4438136</td>
          </tr>
          {/* <tr>
            <td className="center">
              <i className="fas fa-big fa-map-marker-alt"></i>
            </td>
            <td className="center">Address:</td>
            <td>Užičkih heroja 27/1, Užice, Srbija</td>
          </tr> */}
        </tbody>
      </table>
    </Fragment>
  );
}

export default Contact;
