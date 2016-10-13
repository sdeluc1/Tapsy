import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  REQUEST_COMMENTS,
  receiveComments
} from '../actions/comment_actions';

import * as commentAPI from '../util/comment_api_util';

export default ({ getState, dispatch }) => next => action => {
  const success = (data) => dispatch(receiveComments(data));

  switch(action.type){
    case ADD_COMMENT:
      commentAPI.createComment(action.comment, next(action));
      break;
    case REMOVE_COMMENT:
      commentAPI.deleteComment(action.commentId, next(action));
      break;
    case REQUEST_COMMENTS:
      commentAPI.getComments(action.reviewId, success);
      break;
    default:
      return next(action);
  }
}
