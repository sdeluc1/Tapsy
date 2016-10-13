import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  REQUEST_COMMENTS,
  receiveComments
} from '../actions/comment_actions';

import * as commentAPI from '../util/comment_api_util';

export default ({ getState, dispatch }) => next => action => {
  
  switch(action.type){
    case ADD_COMMENT:
      commentAPI.createComment(action.comment, )
    case REMOVE_COMMENT:

    case REQUEST_COMMENTS:

    default:
      return next(action);
  }
}
