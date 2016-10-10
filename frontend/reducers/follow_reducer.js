import { ADD_TO_FOLLOWS, REMOVE_FROM_FOLLOWS } from '../actions/review_actions';
import merge from 'lodash/merge';

const FollowReducer = ( state = false, action) => {
  switch(action.type) {
    case ADD_TO_FOLLOWS:
      return true;
    case REMOVE_FROM_FOLLOWS:
      return false;
    default:
      return state;
  }
};

export default FollowReducer;
