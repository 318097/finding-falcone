import React from 'react';

const AlertBox = ({ message }) => (
  <div className="alert-box">
    <div class="alert alert-danger">
      {message}
    </div>
  </div>
);

export default AlertBox;
