export const fetchReviews = (success, error) => {
  $.ajax({
    url: 'api/reviews',
    method: 'GET',
    success,
    error
  });
};

export const fetchOneReview = (reviewId, success, error) => {
  $.ajax({
    url: `api/reviews/${reviewId}`,
    method: 'GET',
    success,
    error
  });
};

export const createReview = (review, success, error) => {
  $.ajax({
    url: 'api/reviews',
    method: 'POST',
    processData: false,
    contentType: false,
    data: review,
    success,
    error
  });
};

export const removeReview = (reviewId, success, error) => {
  $.ajax({
    url: `api/reviews/${reviewId}`,
    method: 'DELETE',
    success,
    error
  });
};

export const fetchBeerReviews = (beerId, success, error) => {
  $.ajax({
    url: 'api/reviews',
    method: 'GET',
    data: {beer_id: beerId},
    success,
    error
  });
};

export const fetchBreweryReviews = (breweryId, success, error) => {
  $.ajax({
    url: 'api/reviews',
    method: 'GET',
    data: { brewery_id: breweryId },
    success,
    error
  });
};

export const fetchUserReviews = (userId, success, error) => {
  $.ajax({
    url: 'api/reviews',
    method: 'GET',
    data: {author_id: userId},
    success,
    error
  });
};

export const fetchFollowedReviews = (currUser, success, error) => {
  $.ajax({
    url: 'api/reviews',
    method: 'GET',
    data: {curr_user: currUser},
    success,
    error
  });
};
