import React from 'react';
import './fotogalerie.css';
import ph_fotka from '../img/ph_fotka.jpeg';
import michal from '../img/michal.jpg';
import medak from '../img/medak.jpg';
import jirka from '../img/jirka.jpg';

const Fotogalerie = () => {
  return (
    <div id="photo" className="photo">
      <h1>
        <i class="fas fa-camera"></i> fotogalerie
      </h1>
      <div className="photo__gallery">
        <img className="gallery-item" src={ph_fotka} alt="fotka skupiny" />
        <img className="gallery-item" src={michal} alt="Michal" />
        <img className="gallery-item" src={medak} alt="medák" />
        <img className="gallery-item" src={jirka} alt="Jiří" />
      </div>
    </div>
  );
};

export default Fotogalerie;
