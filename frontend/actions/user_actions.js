export const REQUEST_USER = "REQUEST_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const USER_ERRORS = "USER_ERRORS";


export const requestUser = (userId) => ({
  type: REQUEST_USER,
  userId
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: USER_ERRORS,
  errors
});
