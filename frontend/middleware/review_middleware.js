import {
  REQUEST_REVIEWS,
  REQUEST_REVIEW,
  REMOVE_REVIEW,
  CREATE_REVIEW,
  receiveReviews,
  receiveReview,
  removeReview,
  createReview,
  receiveErrors
} from '../actions/review_actions';
import * as reviewAPI from '../util/review_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successReviews = data => dispatch(receiveReviews(data));
  const successReview = data => dispatch(receiveReview(data));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case REQUEST_REVIEWS:
      reviewAPI.fetchReviews(successReviews, errorCallback);
      break;
    case REQUEST_REVIEW:
      reviewAPI.fetchOneReview(action.reviewId, successReview, errorCallback);
      break;
    case REMOVE_REVIEW:
      reviewAPI.removeReview(action.reviewId, next(action), errorCallback);
      break;

    case CREATE_REVIEW:
    debugger
      reviewAPI.createReview(action.review, successReview, errorCallback);
      break;
    default:
      return next(action);
  }
}
