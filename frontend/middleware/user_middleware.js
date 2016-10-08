import { REQUEST_USER, receiveUser, receiveErrors } from '../actions/user_actions';
import { fetchUser } from '../util/user_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successUser = (data) => dispatch(receiveUser(data));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case REQUEST_USER:
      fetchUser(action.userId, successUser, errorCallback);
      break;
    default:
      return next(action);
  }
};
