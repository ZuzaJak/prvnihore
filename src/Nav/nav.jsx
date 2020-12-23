import React from 'react';
import './nav.css';
import logo from '../img/logo.png';

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="nav__links">
          <a href="#">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <a className="nav__links-item" href="#koncerty">
            <span>info a kontakt</span>
            <i className="fas fa-angle-double-down"></i>
          </a>
        </div>
      </div>
      <div className="nav__advert">
        <h3>
          Poslechněte si naši libou hudbu na{' '}
          <a
            className="nav__advert-a"
            href="https://prvnihore1.bandcamp.com/"
            target="_blank"
          >
            Bandcampu
          </a>{' '}
          nebo{' '}
          <a
            className="nav__advert-a"
            href="https://www.youtube.com/playlist?list=PLoN-PgWxxPFGK7jMv9zhAmdM7JeWG9Iu1"
            target="_blank"
          >
            Youtube
          </a>
          !
        </h3>
      </div>
    </>
  );
};

export default Nav;
