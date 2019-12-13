import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Results from './components/Results';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/results" exact component={Results} />
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
