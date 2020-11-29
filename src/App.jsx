import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import InteriorDesignView from './views/InteriorDesignView';
import FFESupplyView from './views/FFESupplyView';
import ProjectManagementView from './views/ProjectManagementView';

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
          <InteriorDesignView />
        </Route>
        <Route path="/project-management">
          <ProjectManagementView />
        </Route>
        <Route path="/ffe">
          <FFESupplyView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
