import React from 'react';
import './Navbar.css';
import logo from '../../assets/imagess/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Üniversite Logosu" />
        <span>Merkezsiz Üniversite</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Ana Sayfa</a></li>
        <li><a href="#about">Hakkında</a></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
