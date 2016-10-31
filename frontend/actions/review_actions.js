export const REQUEST_REVIEWS = "REQUEST_REVIEWS";
export const REQUEST_REVIEW = "REQUEST_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const REQUEST_BEER_REVIEWS = "REQUEST_BEER_REVIEWS";
export const REQUEST_USER_REVIEWS = "REQUEST_USER_REVIEWS";
export const REQUEST_BREWERY_REVIEWS = "REQUEST_BREWERY_REVIEWS";
export const REQUEST_FOLLOWED_REVIEWS = "REQUEST_FOLLOWED_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const REVIEW_ERRORS = "REVIEW_ERRORS";
export const REVIEWS_LOADING = "REVIEWS_LOADING";
export const FOLLOWED_REVIEWS = "FOLLOWED_REVIEWS";
export const REQUEST_REVIEW_DETAIL = "REQUEST_REVIEW_DETAIL";
export const RECEIVE_REVIEW_DETAIL = "RECEIVE_REVIEW_DETAIL";


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

export const reviewsLoading = () => ({
  type: REVIEWS_LOADING
});

export const followedReviews = (user) => ({
  type: FOLLOWED_REVIEWS,
  user
});

export const requestBeerReviews = (beerId) => ({
  type: REQUEST_BEER_REVIEWS,
  beerId
});

export const requestBreweryReviews = (breweryId) => ({
  type: REQUEST_BREWERY_REVIEWS,
  breweryId
});

export const requestUserReviews = (userId) => ({
  type: REQUEST_USER_REVIEWS,
  userId
});

export const requestFollowedReviews = (currUser) => ({
  type: REQUEST_FOLLOWED_REVIEWS,
  currUser
});

export const requestReviewDetail = (reviewId) => ({
  type: REQUEST_REVIEW_DETAIL,
  reviewId
});

export const receiveReviewDetail = (review) => ({
  type: RECEIVE_REVIEW_DETAIL,
  review
});
