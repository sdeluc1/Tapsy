export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
export const RECEIVE_USER_LOGIN = "RECEIVE_USER_LOGIN";
export const REQUEST_CURRENT_USER = "REQUEST_CURRENT_USER";

export const login = (user) => ({
  type: LOGIN,
  user
});

export const logout = (callback) => ({
  type: LOGOUT,
  callback
});

export const signup = (user) => ({
  type: SIGNUP,
  user
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const updateCurrentUser = (user) => ({
  type: UPDATE_CURRENT_USER,
  user
});

export const receiveUserLogin = (user) => ({
  type: RECEIVE_USER_LOGIN,
  user
});

export const requestCurrentUser = (userId) => ({
  type: REQUEST_CURRENT_USER,
  userId
});
