import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import Home from './components/Home';
import Results from './components/Results';
import NotFound from './components/NotFound';

axios.defaults.baseURL = 'https://findfalcone.herokuapp.com';

const App = () => {
  return (
    <div className="app">
      <Header />
      <HashRouter basename='/'>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/results" exact component={Results} />
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
};

export default App;
