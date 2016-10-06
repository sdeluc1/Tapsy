import {
  RECEIVE_BREWERIES,
  RECEIVE_BREWERY,
  REMOVE_BREWERY,
  UPDATE_BREWERY,
  CREATE_BREWERY,
  BREWERY_ERRORS
} from '../actions/brewery_actions';
import merge from 'lodash/merge';

const BreweryReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_BREWERIES:
      newState = {};
      action.breweries.forEach((brewery) => {
        newState[brewery.id] = brewery;
      });
      return newState;

    case RECEIVE_BREWERY:
      const addBrewery = {[action.brewery.id]: action.brewery};
      newState = merge({}, state, addBrewery);
      return newState;

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
