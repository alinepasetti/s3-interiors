import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import HomeView from './views/HomeView';

import NavBar from './components/NavBar';
import UnderConstruction from './views/UnderConstruction';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/interior-design">
          <UnderConstruction />
        </Route>
        <Route path="/project-management">
          <UnderConstruction />
        </Route>
        <Route path="/ffe">
          <UnderConstruction />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
