import {
  CREATE_FOLLOW,
  DELETE_FOLLOW,
  REQUEST_FOLLOWS,
  receiveFollows
} from '../actions/follow_actions';
import { addFollow, removeFollow, requestFollows } from '../util/follow_api_util';

export default ({ getState, dispatch }) => next => action => {
  const success = (data) => dispatch(receiveFollows(data));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case CREATE_FOLLOW:
      addFollow(action.follow, next(action), errorCallback);
      break;
    case DELETE_FOLLOW:
      debugger 
      removeFollow(action.follow.id, next(action), errorCallback);
      break;
    case REQUEST_FOLLOWS:
      requestFollows(success, errorCallback)
      break;
    default:
      return next(action);
  }
}
