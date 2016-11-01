import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  REVIEW_ERRORS,
  REVIEWS_LOADING,
  RECEIVE_REVIEW_DETAIL,
  APPEND_REVIEWS
} from '../actions/review_actions';

import { RECEIVE_BEER } from '../actions/beer_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_BREWERY } from '../actions/brewery_actions';

import merge from 'lodash/merge';

const defaultState = {
  loadingAll: false,
  loadingOne: false,
  list: [],
  moreToAppend: true
};

const ReviewReducer = (state = defaultState, action) => {

  let newState;
  switch(action.type) {
    case RECEIVE_REVIEWS:
      newState = {list: action.reviews, loadingAll: false, moreToAppend: true};
      if(action.reviews.length < 10){
        newState.moreToAppend = false;
      }
      return newState;

    case APPEND_REVIEWS:
      newState = Object.assign({}, state, {
        list: [
          ...state.list,
          ...action.reviews
        ],
        loadingAll: false,
        moreToAppend: true
      });
      if(action.reviews.length < 10){
        newState.moreToAppend = false;
      }
      return newState;

    case RECEIVE_REVIEW:
      newState = Object.assign({}, state, {
        showReview: action.review,
        loadingOne: false,
        list: [
          ...state.list,
          action.review
        ]
      });
      return newState;

    case REVIEW_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;

    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState[action.reviewId];
      return newState;

    // case RECEIVE_BEER:
    //   return {list: action.reviews};

    // case RECEIVE_USER:
    //   return {list: action.user.reviews, loadingOne: true};

    // case RECEIVE_BREWERY:
    //   const breweryReviews = [];
    //   action.brewery.beers.forEach( (beer) => {
    //     breweryReviews.push(...beer.reviews);
    //   });
    //   return { list: breweryReviews, loadingOne: true };

    case REVIEWS_LOADING:
      newState = Object.assign({}, state, {loadingOne: true, loadingAll: true});
      return newState;

    case RECEIVE_REVIEW_DETAIL:
      newState = Object.assign({}, state, {
        showReview: action.review,
        loadingOne: false
      });
      return newState;

    default:
      return state;
  }
};

export default ReviewReducer;
