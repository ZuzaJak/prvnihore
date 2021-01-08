import React from 'react';
import Collapsible from 'react-collapsible';
import './fotogalerie.css';
import ph_fotka from '../img/ph_fotka.jpeg';
import michal from '../img/michal.jpg';
import medak from '../img/medak.jpg';
import jirka from '../img/jirka.jpg';

const Fotogalerie = () => {
  return (
    <div id="photo" className="photo">
      <h1>
        <div>
          <i className="fas fa-camera"></i> fotogalerie
        </div>
      </h1>

      <div className="photo__gallery">
        <div className="gallery-item">
          <img src={ph_fotka} alt="fotka skupiny" />
        </div>
        <div className="gallery-item">
          <img src={michal} alt="Michal" />
        </div>
        <div className="gallery-item">
          <img src={medak} alt="medák" />
        </div>
        <div className="gallery-item">
          <img src={jirka} alt="Jiří" />
        </div>
      </div>
    </div>
  );
};

export default Fotogalerie;
