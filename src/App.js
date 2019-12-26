import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import config from "./config";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

import Search from "./components/Search";
import Results from "./components/Results";
import NotFound from "./components/NotFound";

axios.defaults.baseURL = config.SERVER_URL;

const App = () => (
  <div className="app">
    <Header />
    <HashRouter basename="/">
      <Switch>
        <Route path="/search" exact component={Search} />
        <Route path="/results" exact component={Results} />
        <Route path="/" exact render={() => <Redirect to="/search" />} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
    <Footer />
  </div>
);

export default App;
