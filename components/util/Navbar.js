import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import SocialLinks from './SocialLinks';

import styles from '@/styles/Navbar.module.scss';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  let dropdownClass = `${styles.navMenu} ${styles.dropdownToggle} ${showDropdown ? styles.show : ''}`;
  return (
    <nav className={styles.nav}>
      <div className={styles.navProfile}>
        <img className={styles.profilePhoto} src="avatar.png" width={180} height={180} alt="avatar" />
        <p className={styles.profileName}>
          <strong>Vladimir Vuksanović</strong>
        </p>
        <p className={styles.profileTitle}>
          <em>Bachelor of Informatics</em>
        </p>
      </div>
      <div className={styles.navbar}>
        <SocialLinks />
        <span onClick={() => setShowDropdown(!showDropdown)} className={styles.navToggle}>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>
      <div className={styles.navExtend}>
        <ul id={styles.navDropdown} className={dropdownClass}>
          <li>
            <a href="#about" className={styles.navItem} onClick={() => setShowDropdown(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#education" className={styles.navItem} onClick={() => setShowDropdown(false)}>
              Education
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.navItem} onClick={() => setShowDropdown(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navItem} onClick={() => setShowDropdown(false)}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.navFooter}>
        <SocialLinks />
      </div>
    </nav>
  );
}

export default Navbar;
