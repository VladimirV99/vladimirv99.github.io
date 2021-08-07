import { Fragment } from 'react';

import './Contact.css';

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
    </Fragment>
  );
}

export default Contact;
