import React, { useState } from 'react';
import './koncerty.css';

import Collapsible from 'react-collapsible';

const Koncerty = () => {
  const [arrow, setArrow] = useState('fas fa-chevron-down');

  return (
    <div id="koncerty" className="koncerty">
      <Collapsible
        trigger={
          <h1>
            <div>
              <i className="fas fa-microphone-alt"></i> koncerty
            </div>
            <i className={arrow}></i>
          </h1>
        }
        onOpening={() => setArrow('fas fa-chevron-up')}
        onClosing={() => setArrow('fas fa-chevron-down')}
      >
        <h2 className="koncerty-info">
          Aktuálně nejsou žádné plánované koncerty.
        </h2>
      </Collapsible>
    </div>
  );
};

export default Koncerty;
