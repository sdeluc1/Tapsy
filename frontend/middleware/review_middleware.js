import {
  REQUEST_REVIEWS,
  REQUEST_REVIEW,
  REMOVE_REVIEW,
  CREATE_REVIEW,
  receiveReviews,
  receiveReview,
  removeReview,
  createReview,
  receiveErrors,
  REQUEST_BEER_REVIEWS,
  REQUEST_BREWERY_REVIEWS,
  REQUEST_REVIEW_DETAIL,
  receiveReviewDetail,
  REQUEST_USER_REVIEWS,
  REQUEST_FOLLOWED_REVIEWS
} from '../actions/review_actions';
import * as reviewAPI from '../util/review_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successReviews = data => dispatch(receiveReviews(data));
  const successReview = data => dispatch(receiveReview(data));
  const successReviewDetail = data => dispatch(receiveReviewDetail(data));
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
      reviewAPI.createReview(action.review, successReview, errorCallback);
      break;

    case REQUEST_BEER_REVIEWS:
      reviewAPI.fetchBeerReviews(action.beerId, successReviews, errorCallback);
      break;

    case REQUEST_BREWERY_REVIEWS:
      reviewAPI.fetchBreweryReviews(action.breweryId, successReviews, errorCallback);
      break;

    case REQUEST_USER_REVIEWS:
      reviewAPI.fetchUserReviews(action.userId, successReviews, errorCallback);
      break;

    case REQUEST_FOLLOWED_REVIEWS:
      reviewAPI.fetchFollowedReviews(action.currUser, successReviews, errorCallback);
      break;

    case REQUEST_REVIEW_DETAIL:
      reviewAPI.fetchOneReview(action.reviewId, successReviewDetail, errorCallback);
      break;

    default:
      return next(action);
  }
}
