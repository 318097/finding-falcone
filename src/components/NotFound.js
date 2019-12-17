import React from 'react';
import { withRouter } from 'react-router-dom';

const NotFound = ({ history }) => (
  <section id="not-found">
    <p>404 - Page not found</p>
    <button className="btn-primary" onClick={() => history.push('/')}>Home</button>
  </section>
);

export default withRouter(NotFound);
