import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import { CREATE_FOLLOW, DELETE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  following: null,
  follows_arr: [],
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.currentUser;
      newState.follows_arr = action.currentUser.follows;
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

    case CREATE_FOLLOW:
    debugger
      newState = merge({}, state);
      newState.follows_arr.push(action.follow.follow);
      newState.following = true;
      return newState;

    case DELETE_FOLLOW:
      newState = merge({}, state);
      // const followIdx = newState.follows_arr.indexOf(action.follow.follow_id);
      let followIdx;
      for(let i = 0; i < newState.follows_arr.length; i++){
        if(newState.follows_arr[i].id === action.follow.id){
          followIdx = i;
          break;
        }
      }
      newState.follows_arr = [...newState.follows_arr.slice(0, followIdx),
                              ...newState.follows_arr.slice(followIdx + 1)];

      newState.following = false;
      return newState;

    case RECEIVE_USER:
      newState = merge({}, state);
      newState.following = false;
      for(let i = 0; i < newState.follows_arr.length; i++){
        if(newState.follows_arr[i].follow_id === action.user.id){
          newState.following = true;
          break;
        }
      }
      return newState;

    default:
      return state;
  }
};

export default SessionReducer;
