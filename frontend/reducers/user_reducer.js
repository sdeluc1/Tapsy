import { RECEIVE_USER, USER_ERRORS, RESET_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state = { loading: true }, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return merge(action.user, {loading: false});

    case RESET_USER:
      return merge({}, state, {loading: true});

    case USER_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;

    default:
      return state;
  }
};

export default UserReducer;
