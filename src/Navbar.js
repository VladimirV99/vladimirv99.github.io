import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  let dropdownClass = 'nav-menu dropdown-toggle' + (showDropdown ? ' show' : '');
  return (
    <nav id="main-nav">
      <div className="nav-bar">
        <img className="profile-photo" src="logo.png" alt="logo" />
        <span onClick={() => setShowDropdown(!showDropdown)} className="nav-toggle">
          <i className="fa fa-bars"></i>
        </span>
      </div>
      <div className="nav-extend">
        <ul id="nav-dropdown" className={dropdownClass}>
          <li>
            <a href="#home" className="nav-item" onClick={() => setShowDropdown(false)}>
              Home
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
    </nav>
  );
}

export default Navbar;
