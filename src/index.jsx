import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import HomePage from './Pages/HomePage.jsx';
import BioPage from './Pages/BioPage.jsx';
import DiscoPage from './Pages/DiscoPage.jsx';
import GigsPage from './Pages/GigsPage.jsx';
import PhotoPage from './Pages/PhotoPage.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/bio">
        <BioPage />
      </Route>
      <Route path="/disco">
        <DiscoPage />
      </Route>
      <Route path="/gigs">
        <GigsPage />
      </Route>
      <Route path="/photo">
        <PhotoPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);
render(<App />, document.querySelector('#app'));
