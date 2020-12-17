import React from 'react';
import './koncerty.css';

const Koncerty = () => {
  return (
    <>
      <h1>
        <i class="fas fa-microphone-alt"></i> koncerty
      </h1>
      <div id="koncerty" className="koncerty">
        <h2 className="koncerty-info">
          Aktuálně nejsou žádné plánované koncerty.
        </h2>
      </div>
    </>
  );
};

export default Koncerty;
