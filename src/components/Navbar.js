import React, { useState } from 'react';
import SocialLinks from './SocialLinks';
import './Navbar.css';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  let dropdownClass = 'nav-menu dropdown-toggle' + (showDropdown ? ' show' : '');
  return (
    <nav id="main-nav">
      <div className="nav-profile">
        <img className="profile-photo" src="avatar.png" alt="avatar" />
        <p className="profile-name">
          <strong>Vladimir Vuksanović</strong>
        </p>
        <p className="profile-title">
          <em>Bachelor of Informatics</em>
        </p>
      </div>
      <div className="nav-bar">
        <SocialLinks />
        <span onClick={() => setShowDropdown(!showDropdown)} className="nav-toggle">
          <i className="fa fa-bars"></i>
        </span>
      </div>
      <div className="nav-extend">
        <ul id="nav-dropdown" className={dropdownClass}>
          <li>
            <a href="#about" className="nav-item" onClick={() => setShowDropdown(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#education" className="nav-item" onClick={() => setShowDropdown(false)}>
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-item" onClick={() => setShowDropdown(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-item" onClick={() => setShowDropdown(false)}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-footer">
        <SocialLinks />
      </div>
    </nav>
  );
}

export default Navbar;
