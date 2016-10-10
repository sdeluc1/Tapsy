export const CREATE_FOLLOW = "CREATE_FOLLOW";
export const DELETE_FOLLOW = "DELETE_FOLLOW";
export const ADD_TO_FOLLOWS = "ADD_TO_FOLLOWS";
export const REMOVE_FROM_FOLLOWS = "REMOVE_FROM_FOLLOWS";

export const createFollow = (follow) => ({
  type: CREATE_FOLLOW,
  follow
});

export const deleteFollow = (followId) => ({
  type: DELETE_FOLLOW,
  followId
});

export const addToFollows = () => ({
  type: ADD_TO_FOLLOWS
});

export const removeFromFollows = () => ({
  type: REMOVE_FROM_FOLLOWS
});
