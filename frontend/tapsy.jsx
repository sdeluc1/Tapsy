import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './util/session_api_util';
import { fetchBeers, createBeer, fetchOneBeer, updateBeer, removeBeer } from './util/beer_api_util';
import { fetchBreweries, createBrewery, fetchOneBrewery, updateBrewery, removeBrewery } from './util/brewery_api_util';

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

window.fetchBeers = fetchBeers;
window.createBeer = createBeer;
window.fetchOneBeer = fetchOneBeer;
window.updateBeer = updateBeer;
window.removeBeer = removeBeer;

window.fetchBreweries = fetchBreweries;
window.createBrewery = createBrewery;
window.fetchOneBrewery = fetchOneBrewery;
window.updateBrewery = updateBrewery;
window.removeBrewery = removeBrewery;

window.success = (data) => console.log(data);
