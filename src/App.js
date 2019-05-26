import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import Demos from './pages/Demos';
import Docs from './pages/Docs';
import Support from './pages/Support';

function App() {
  return (
    <div className="App">
      <NavLink className="nav__link" to="/">Index</NavLink>
      <NavLink className="nav__link" to="/demos">Demos</NavLink>
      <NavLink className="nav__link" to="/docs">Docs</NavLink>
      <NavLink className="nav__link" to="/support">Support</NavLink>

      <div>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/demos" component={Demos} />
          <Route path="/docs" component={Docs} />
          <Route path="/support" component={Support} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
