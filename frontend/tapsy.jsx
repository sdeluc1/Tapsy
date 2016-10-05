import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './util/session_api_util';
import { requestBeers, requestBeer, createBeer, removeBeer, updateBeer } from './actions/beer_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

window.login = login;
window.logout = logout;
window.signup = signup;

window.store = configureStore();
window.requestBeers = requestBeers;
window.requestBeer = requestBeer;
window.createBeer = createBeer;
window.removeBeer = removeBeer;
window.updateBeer = updateBeer;

window.success = (data) => console.log(data);
