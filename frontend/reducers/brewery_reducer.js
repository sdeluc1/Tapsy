import {
  RECEIVE_BREWERIES,
  RECEIVE_BREWERY,
  REMOVE_BREWERY,
  UPDATE_BREWERY,
  CREATE_BREWERY,
  BREWERY_ERRORS
} from '../actions/brewery_actions';
import merge from 'lodash/merge';

const BreweryReducer = (state = {loading: true, list: []}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_BREWERIES:
      return {loading: true, list: action.breweries};

    case RECEIVE_BREWERY:
      return merge({}, state, {showBrewery: action.brewery, loading: false});

    case BREWERY_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;

    case REMOVE_BREWERY:
      newState = merge({}, state);
      delete newState[action.breweryId];
      return newState;

    default:
      return state;
  }
};

export default BreweryReducer;
