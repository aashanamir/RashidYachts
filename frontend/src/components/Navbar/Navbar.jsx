import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/logo.webp';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to={"/"}>
          <img src={Logo} alt="Logo" width={200} />
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item active"><a href="#Home">HOME</a></li>
          <li className="navbar-item"><a href="#About">ABOUT</a></li>
          <li className="navbar-item"><a href="#Features">FEATURES</a></li>
          <li className="navbar-item"><a href="#Gallery">GALLERY</a></li>
          <li className="navbar-item"><a href="#Gallery">PAYMENT PLAN</a></li>
          <li className="navbar-item"><a href="#Floor">FLOOR PLAN</a></li>
          <li className="navbar-item"><a href="#Contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
