export const fetchReviews = (offset, success, error) => {
  $.ajax({
    url: 'api/reviews',
    method: 'GET',
    data: { offset: offset },
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

export const fetchBeerReviews = (beerId, offset, success, error) => {
  $.ajax({
    url: 'api/reviews',
    method: 'GET',
    data: {beer_id: beerId, offset: offset},
    success,
    error
  });
};

export const fetchBreweryReviews = (breweryId, offset, success, error) => {
  $.ajax({
    url: 'api/reviews',
    method: 'GET',
    data: { brewery_id: breweryId, offset: offset },
    success,
    error
  });
};

export const fetchUserReviews = (userId, offset, success, error) => {
  $.ajax({
    url: 'api/reviews',
    method: 'GET',
    data: {author_id: userId, offset: offset},
    success,
    error
  });
};

export const fetchFollowedReviews = (currUser, offset, success, error) => {
  $.ajax({
    url: 'api/reviews',
    method: 'GET',
    data: { curr_user: currUser, offset: offset },
    success,
    error
  });
};
