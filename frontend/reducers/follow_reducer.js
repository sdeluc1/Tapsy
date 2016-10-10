import { RECEIVE_FOLLOWS } from '../actions/follow_actions';
import merge from 'lodash/merge';

const FollowReducer = ( state = [], action) => {
  switch(action.type) {
    case RECEIVE_FOLLOWS:
      return action.follows;
    default:
      return state;
  }
};

export default FollowReducer;
