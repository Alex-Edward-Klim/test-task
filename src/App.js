import React from 'react';

import './App.css';

import Nav from './components/Nav';
import Main from './components/Main';
import News from './components/News';
import Catalog from './components/Catalog';
import Contacts from './components/Contacts';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Nav />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/news" component={News} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
