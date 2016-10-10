import React from 'react';
import App from './app';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import SessionFormContainer from './sessions/session_form_container';
import HomeContainer from './home/home_container';
import AddFormContainer from './add_forms/add_form_container';
import { requestBreweries, requestBrewery } from '../actions/brewery_actions';
import { requestBeer } from '../actions/beer_actions';
import { requestReviews } from '../actions/review_actions';
import { requestUser } from '../actions/user_actions';
import BeerContainer from './beer/beer_container';
import UserContainer from './user/user_container';
import BreweryContainer from './brewery/brewery_container';

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

  const homeOnEnter = (nextState, replace) => {
    if(_ensureLoggedIn(nextState, replace)) {
      store.dispatch(requestReviews());
      store.dispatch(requestBreweries());
    }
  }

  const beerOnEnter = (nextState, replace) => {
    if(_ensureLoggedIn(nextState, replace)) {
      store.dispatch(requestBeer(nextState.params.beerId));
      store.dispatch(requestReviews());
    }
  }

  const userOnEnter = (nextState, replace) => {
    if(_ensureLoggedIn(nextState, replace)) {
      store.dispatch(requestUser(nextState.params.userId));
      store.dispatch(requestReviews());
    }
  }

  const breweryOnEnter = (nextState, replace) => {
    if(_ensureLoggedIn(nextState, replace)) {
      store.dispatch(requestBrewery(nextState.params.breweryId));
      store.dispatch(requestReviews());
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRedirect to="/login" />
          <Route path="/home" component={HomeContainer} onEnter={homeOnEnter} feedType="home"/>
          <Route path="/beer/:beerId" component={BeerContainer} onEnter={beerOnEnter} feedType="beer"/>
          <Route path="/brewery/:breweryId" component={BreweryContainer} onEnter={breweryOnEnter} feedType="brewery" />
          <Route path="/user/:userId" component={UserContainer} onEnter={userOnEnter} feedType="user" />
        </Route>
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
      </Router>
    </Provider>
  );

};

export default Root;
