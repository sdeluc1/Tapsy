import { REQUEST_USER, receiveUser, receiveErrors } from '../actions/user_actions';
import { REQUEST_CURRENT_USER, receiveCurrentUser } from '../actions/session_actions';
import { fetchUser } from '../util/user_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successUser = (data) => dispatch(receiveUser(data));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case REQUEST_USER:
      fetchUser(action.userId, successUser, errorCallback);
      break;

    case REQUEST_CURRENT_USER:
      fetchUser(action.userId, (data) => dispatch(receiveCurrentUser(data)));
      break;
      
    default:
      return next(action);
  }
};
