import React from 'react';
import NavBar from './nav_bar';
import AddForm from './add_forms/add_form_container';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <NavBar />
    <AddForm id="beer-form" formType="beer"/>
    <AddForm id="brewery-form" formType="brewery"/>
    {children}
  </div>
);

export default App;
