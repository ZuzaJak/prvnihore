import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import Nav from './Nav/nav.jsx';
import Koncerty from './Koncerty/koncerty.jsx';
import Disco from './Disco/disco.jsx';
import Fotogalerie from './Fotogalerie/fotogalerie.jsx';
import Kontakt from './Kontakt/kontakt.jsx';

const App = () => {
  return (
    <>
      <Nav />
      <Koncerty />
      <Disco />
      <Fotogalerie />
      <Kontakt />
    </>
  );
};
render(<App />, document.querySelector('#app'));
