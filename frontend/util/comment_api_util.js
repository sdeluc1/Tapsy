export const getComments = (reviewId, success, error) => {
  $.ajax({
    url: 'api/comments',
    method: 'GET',
    data: {review_id: reviewId},
    success,
    error
  });
};

export const createComment = (comment, success, error) => {
  $.ajax({
    url: 'api/comments',
    method: 'POST',
    data: comment,
    success,
    error
  });
};

export const deleteComment = (commentId, success, error) => {
  $.ajax({
    url: `api/comments/${commentId}`,
    method: 'DELETE',
    success,
    error
  });
};
