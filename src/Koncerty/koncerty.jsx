import React from 'react';
import './koncerty.css';

const Koncerty = () => {
  return (
    <div id="koncerty" className="koncerty">
      <div className="koncerty__container">
        <h1>
          <i class="fas fa-microphone-alt"></i> koncerty
        </h1>
        <h2 className="koncerty-info">
          Aktuálně nejsou žádné plánované koncerty.
        </h2>
      </div>
    </div>
  );
};

export default Koncerty;
