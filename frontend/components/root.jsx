import React from 'react';
import App from './app';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import SessionFormContainer from './sessions/session_form_container';
import HomeContainer from './home/home_container';
import AddFormContainer from './add_forms/add_form_container';
import { requestBreweries } from '../actions/brewery_actions';
import { requestBeer } from '../actions/beer_actions';
import BeerContainer from './beer/beer_container';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const requestBeerOnEnter = (nextState) => {
		store.dispatch(requestBeer(nextState.params.beerId));
	};

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRedirect to="/login" />
          <Route path="/home" component={HomeContainer} onEnter={_ensureLoggedIn} />
          <Route path="/add-beer" component={AddFormContainer} onEnter={() => store.dispatch(requestBreweries())} />
          <Route path="/add-brewery" component={AddFormContainer} />
          <Route path="/beer/:beerId" component={BeerContainer} onEnter={requestBeerOnEnter} />
        </Route>
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
      </Router>
    </Provider>
  );

};

export default Root;
