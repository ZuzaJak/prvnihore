import React from 'react';
import './nav.css';
import logo from '../img/logo.png';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <a href="#">
          <img className="logo" src={logo} alt="logo" />
        </a>
      </div>

      <div className="nav__links">
        <a className="nav__ham-menu">
          <i class="fas fa-bars"></i>
        </a>
        <a className="nav__links-item" href="#koncerty">
          koncerty
        </a>
        <a className="nav__links-item" href="#disco">
          diskografie
        </a>
        <a className="nav__links-item" href="#photo">
          fotogalerie
        </a>
        <a className="nav__links-item" href="#kontakt">
          kontakt
        </a>
      </div>
    </div>
  );
};

export default Nav;
