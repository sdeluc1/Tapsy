import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  REVIEW_ERRORS
} from '../actions/review_actions';

import { RECEIVE_BEER } from '../actions/beer_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_BREWERY } from '../actions/brewery_actions';
import merge from 'lodash/merge';

const defaultState = {
  loadingAll: true,
  loadingOne: true,
  list: []
};

const ReviewReducer = (state = defaultState, action) => {

  let newState;
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return {list: action.reviews, loadingAll: false, loadingOne: true};

    case RECEIVE_REVIEW:
      newState = merge({}, state, {showReview: action.review, loadingOne: false, loadingAll: true});
      return newState;

    case REVIEW_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;

    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState[action.reviewId];
      return newState;

    case RECEIVE_BEER:
      return {list: action.beer.reviews};

    case RECEIVE_USER:
      return {list: action.user.reviews};

    case RECEIVE_BREWERY:
      const breweryReviews = [];
      action.brewery.beers.forEach( (beer) => {
        breweryReviews.push(...beer.reviews);
      });
      return { list: breweryReviews };

    default:
      return state;
  }
};

export default ReviewReducer;
