import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={Logo} alt="Logo" width={200} />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item active"><a href="#Home">HOME</a></li>
          <li className="navbar-item"><a href="/">ABOUT</a></li>
          <li className="navbar-item"><a href="/">FEATURES</a></li>
          <li className="navbar-item"><a href="/">GALLERY</a></li>
          <li className="navbar-item"><a href="/">PAYMENT PLAN</a></li>
          <li className="navbar-item"><a href="/">FLOOR PLAN</a></li>
          <li className="navbar-item"><a href="/">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
