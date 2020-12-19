import React from 'react';
import './koncerty.css';
import Collapsible from 'react-collapsible';

const Koncerty = () => {
  return (
    <>
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
        <div id="koncerty" className="koncerty">
          <h2 className="koncerty-info">
            Aktuálně nejsou žádné plánované koncerty.
          </h2>
        </div>
      </Collapsible>
    </>
  );
};

export default Koncerty;
