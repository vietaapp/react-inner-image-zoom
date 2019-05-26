import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Index from './pages/Index';
import Demos from './pages/Demos';
import Docs from './pages/Docs';
import Support from './pages/Support';

function App() {
  return (
    <div className="App">
      <Nav />

      <Main>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/demos" component={Demos} />
          <Route path="/docs" component={Docs} />
          <Route path="/support" component={Support} />
        </Switch>
      </Main>
    </div>
  );
}

export default App;
