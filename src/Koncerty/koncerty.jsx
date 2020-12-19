import React from 'react';
import './koncerty.css';
import Collapsible from 'react-collapsible';

const Koncerty = () => {
  return (
    <div id="koncerty" className="koncerty">
      <Collapsible
        trigger={
          <h1>
            <div>
              <i class="fas fa-microphone-alt"></i> koncerty
            </div>
            <i class="fas fa-chevron-down"></i>
          </h1>
        }
      >
        <h2 className="koncerty-info">
          Aktuálně nejsou žádné plánované koncerty.
        </h2>
      </Collapsible>
    </div>
  );
};

export default Koncerty;
