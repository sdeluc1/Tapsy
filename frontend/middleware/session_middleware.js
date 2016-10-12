
import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  receiveUserLogin,
  receiveErrors
} from '../actions/session_actions';
import * as API from '../util/session_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveUserLogin(user));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case LOGIN:
      API.login(action.user, successCallback, errorCallback);
      break;
    case LOGOUT:
      API.logout(() => {
        next(action);
        action.callback();
      });
      break;
    case SIGNUP:
      API.signup(action.user, successCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};
