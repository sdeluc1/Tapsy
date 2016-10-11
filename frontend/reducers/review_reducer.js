import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  REVIEW_ERRORS
} from '../actions/review_actions';
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

    default:
      return state;
  }
};

export default ReviewReducer;
