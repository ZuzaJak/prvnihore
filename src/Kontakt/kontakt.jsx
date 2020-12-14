import React from 'react';
import './kontakt.css';
import bandzone_logo from '../img/bandzone_logo.png';

const Kontakt = () => {
  return (
    <div id="kontakt" className="kontakt">
      <p>
        <i className="fas fa-paper-plane"></i> hore@seznam.cz
      </p>
      <p>booking Štěpánka Kubíčková +420 774 486 659</p>
      <div className="kontakt__links">
        <a href="https://www.facebook.com/prvnihoreofficial/" target="_blank">
          <i className="kontakt-icon fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/prvnihore/" target="_blank">
          <i className="kontakt-icon fab fa-instagram"></i>
        </a>
        <a href="https://prvnihore1.bandcamp.com/" target="_blank">
          <i className="kontakt-icon fab fa-bandcamp"></i>
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PLoN-PgWxxPFGK7jMv9zhAmdM7JeWG9Iu1"
          target="_blank"
        >
          <i className="kontakt-icon fab fa-youtube"></i>
        </a>
        <a href="https://bandzone.cz/prvnihore" target="_blank">
          <img className="bandzone-logo" src={bandzone_logo} alt="bandzone" />
        </a>
      </div>
    </div>
  );
};

export default Kontakt;
