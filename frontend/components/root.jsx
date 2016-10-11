import React from 'react';
import App from './app';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import SessionFormContainer from './sessions/session_form_container';
import HomeContainer from './home/home_container';
import AddFormContainer from './add_forms/add_form_container';
import { requestBreweries, requestBrewery } from '../actions/brewery_actions';
import { requestBeer, requestBeers } from '../actions/beer_actions';
import { requestReviews, requestReview } from '../actions/review_actions';
import { requestUser } from '../actions/user_actions';
import { requestFollows } from '../actions/follow_actions';
import { receiveCurrentUser } from '../actions/session_actions';
import BeerContainer from './beer/beer_container';
import UserContainer from './user/user_container';
import BreweryContainer from './brewery/brewery_container';
import ReviewDetailContainer from './reviews/review_detail_container';
import BrewsContainer from './brews/brews_container';

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
      store.dispatch(requestFollows());
      store.dispatch(requestBreweries());
    }
  }

  const beerOnEnter = (nextState, replace) => {
    if(_ensureLoggedIn(nextState, replace)) {
      store.dispatch(requestBeer(nextState.params.beerId));
    }
  }

  const userOnEnter = (nextState, replace) => {
    if(_ensureLoggedIn(nextState, replace)) {
      store.dispatch(requestUser(nextState.params.userId));
    }
  }

  const breweryOnEnter = (nextState, replace) => {
    if(_ensureLoggedIn(nextState, replace)) {
      store.dispatch(requestBrewery(nextState.params.breweryId));
    }
  }

  const reviewOnEnter = (nextState, replace) => {
    if(_ensureLoggedIn(nextState, replace)) {
      store.dispatch(requestReview(nextState.params.reviewId));
    }
  }

  const brewsOnEnter = (nextState, replace) => {
    if(_ensureLoggedIn(nextState, replace)) {
      store.dispatch(requestReviews());
      store.dispatch(requestBeers());
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRedirect to="/login" />
          <Route path="home" component={HomeContainer} onEnter={homeOnEnter} feedType="home"/>
          <Route path="beer/:beerId" component={BeerContainer} onEnter={beerOnEnter} feedType="beer"/>
          <Route path="brewery/:breweryId" component={BreweryContainer} onEnter={breweryOnEnter} feedType="brewery" />
          <Route path="user/:userId" component={UserContainer} onEnter={userOnEnter} feedType="user" />
          <Route path="reviews/:reviewId" component={ReviewDetailContainer} onEnter={reviewOnEnter}/>
          <Route path="thebrews" component={BrewsContainer} onEnter={brewsOnEnter} feedType="brews" />
        </Route>
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
      </Router>
    </Provider>
  );

};

export default Root;
