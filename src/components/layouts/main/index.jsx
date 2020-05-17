import React from 'react';
import Styles from './styles';

export default ({ children }) => (
  <Styles>
    {/* <div className="navbar navbar-light bg-light shadow-sm">
      <div className="container">
        <a href="#" className="navbar-brand">IDENTITY</a>
      </div>
    </div> */}
    {children}
  </Styles>
);