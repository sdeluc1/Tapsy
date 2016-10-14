export const REQUEST_REVIEWS = "REQUEST_REVIEWS";
export const REQUEST_REVIEW = "REQUEST_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const REQUEST_BEER_REVIEWS = "REQUEST_BEER_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const REVIEW_ERRORS = "REVIEW_ERRORS";

export const requestReviews = () => ({
  type: REQUEST_REVIEWS
});

export const requestReview = (reviewId) => ({
  type: REQUEST_REVIEW,
  reviewId
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const createReview = (review) => ({
  type: CREATE_REVIEW,
  review
});

export const receiveErrors = (errors) => ({
  type: REVIEW_ERRORS,
  errors
});

export const requestBeerReviews = (beerId, callback) => ({
  type: REQUEST_BEER_REVIEWS,
  beerId,
  callback
});
