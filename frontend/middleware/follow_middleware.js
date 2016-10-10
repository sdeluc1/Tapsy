import { CREATE_FOLLOW, DELETE_FOLLOW, addToFollows, removeFromFollows } from '../actions/follow_actions';
import { addFollow, removeFollow } from '../util/follow_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCreate = () => dispatch(addToFollows());
  const successDelete = () => dispatch(removeFromFollows());
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case CREATE_FOLLOW:
      addFollow(action.follow, successCreate, errorCallback);
      break;
    case DELETE_FOLLOW:
      removeFollow(action.followId, successDelete, errorCallback);
      break;
    default:
      return next(action);
  }
}
