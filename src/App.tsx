import React from 'react';

import './App.css';
import { Home } from "./pages/home"
import { Route, Switch } from 'react-router-dom';
import { About } from './pages/about';
import { Portfolio } from './pages/portfolio';
import { Experience } from './pages/experience';
import { NavBar } from './components/navbar';
import { Error } from './pages/error';
import TemporaryDrawer from './components/temp-drawer';

function App() {

  return (
    <div className="my-app">
      <NavBar />
      <TemporaryDrawer />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/experience" component={Experience} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
