import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import HomeView from './views/HomeView';

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
