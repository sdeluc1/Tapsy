export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const DELETE_FOLLOW = "DELETE_FOLLOW";
export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const REQUEST_FOLLOWS = "REQUEST_FOLLOWS";

export const createFollow = (follow) => ({
  type: CREATE_FOLLOW,
  follow
});

export const deleteFollow = (followId) => ({
  type: DELETE_FOLLOW,
  followId
});

export const receiveFollows = (follows) => ({
  type: RECEIVE_FOLLOWS,
  follows
});

export const requestFollows = () => ({
  type: REQUEST_FOLLOWS
});
