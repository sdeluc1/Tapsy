import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './util/session_api_util';
import { requestReviews } from './actions/review_actions';

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
window.requestReviews = requestReviews;

window.success = (data) => console.log(data);
