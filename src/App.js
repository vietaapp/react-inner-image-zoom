import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Index from './pages/Index';
import Demos from './pages/Demos';
import Docs from './pages/Docs';
import Support from './pages/Support';

function App() {
  return (
    <div className="App">
      <Nav />

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
