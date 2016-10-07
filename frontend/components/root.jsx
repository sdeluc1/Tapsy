import React from 'react';
import App from './app';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import SessionFormContainer from './sessions/session_form_container';
import HomeContainer from './home/home_container';
import AddFormContainer from './add_forms/add_form_container';
import { requestBreweries } from '../actions/brewery_actions';
import { requestBeer } from '../actions/beer_actions';
import { requestReviews } from '../actions/review_actions';
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
      return false;
    }
    return true;
  };

  const requestBeerOnEnter = (nextState) => {
		store.dispatch(requestBeer(nextState.params.beerId));
	};

  const homeOnEnter = (nextState, replace) => {
    if(_ensureLoggedIn(nextState, replace)) {
      store.dispatch(requestReviews());
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRedirect to="/login" />
          <Route path="/home" component={HomeContainer} onEnter={homeOnEnter} feedType="home"/>
          <Route path="/add-beer" component={AddFormContainer} onEnter={() => store.dispatch(requestBreweries())} />
          <Route path="/add-brewery" component={AddFormContainer} />
          <Route path="/beer/:beerId" component={BeerContainer} onEnter={requestBeerOnEnter} feedType="beer"/>
        </Route>
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
      </Router>
    </Provider>
  );

};

export default Root;
