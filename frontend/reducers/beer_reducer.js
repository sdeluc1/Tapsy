import {
  RECEIVE_BEERS,
  RECEIVE_BEER,
  REMOVE_BEER,
  UPDATE_BEER,
  CREATE_BEER,
  BEER_ERRORS
} from '../actions/beer_actions';
import merge from 'lodash/merge';

const BeerReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_BEERS:
      newState = {};
      action.beers.forEach((beer) => {
        newState[beer.id] = beer;
      });
      return newState;

    case RECEIVE_BEER:
      const addBeer = {[action.beer.id]: action.beer};
      newState = merge({}, state, addBeer);
      return newState;

    case BEER_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;

    case REMOVE_BEER:
      newState = merge({}, state);
      delete newState[action.beerId];
      return newState;

    default:
      return state;
  }
};

export default BeerReducer;
