export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const REQUEST_COMMENTS = "REQUEST_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
});

export const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});

export const requestComments = (reviewId) => ({
  type: REQUEST_COMMENTS,
  reviewId
});

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});
