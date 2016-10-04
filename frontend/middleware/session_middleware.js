
import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  receiveCurrentUser,
  receiveErrors
} from '../actions/session_actions';
import * as API from '../util/session_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case LOGIN:
      API.login(action.user, successCallback, errorCallback);
      break;
    case LOGOUT:
      API.logout(() => next(action));
      break;
    case SIGNUP:
      API.signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
