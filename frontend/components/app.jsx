import React from 'react';
import NavBar from './nav_bar';
import AddForm from './add_forms/add_form_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className="app-body">
    <NavBar />
    <div className="app-children">
      {children}
    </div>
  </div>
);

export default App;
