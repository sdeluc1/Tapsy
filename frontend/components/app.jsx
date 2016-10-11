import React from 'react';
import NavBarContainer from './nav_container';
import AddForm from './add_forms/add_form_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className="app-body">
    <NavBarContainer />
    <div className="app-children">
      {children}
    </div>
  </div>
);

export default App;
