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

export const filteredReviews = (beerId, success) => {
  $.ajax({
    url: 'api/reviews',
    method: 'GET',
    data: {beer_id: beerId},
    success
  });
};
