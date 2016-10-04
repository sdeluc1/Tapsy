import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;

    case RECEIVE_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      newState.currentUser = null;
      return newState;

    case LOGOUT:
      newState = merge({}, state);
      newState.errors = [];
      newState.currentUser = null;
      return newState;

    default:
      return state;
  }
};

export default SessionReducer;
