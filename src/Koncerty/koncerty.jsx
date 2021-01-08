import React from 'react';
import './koncerty.css';

const Koncerty = () => {
  return (
    <div id="koncerty" className="koncerty">
      <h1>
        <div>
          <i className="fas fa-microphone-alt"></i> koncerty
        </div>
      </h1>
      <h2 className="koncerty-info">
        Aktuálně nejsou žádné plánované koncerty.
      </h2>
    </div>
  );
};

export default Koncerty;
