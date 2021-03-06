import {
  RECEIVE_BEERS,
  RECEIVE_BEER,
  REMOVE_BEER,
  RESET_BEER,
  UPDATE_BEER,
  CREATE_BEER,
  BEER_ERRORS
} from '../actions/beer_actions';
import merge from 'lodash/merge';

const defaultState = {
  loadingAll: true,
  loadingOne: true,
  list: []
};

const BeerReducer = (state = defaultState, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_BEERS:
      return merge({}, state, {loadingAll: false}, action.beers);

    case RECEIVE_BEER:
      newState = Object.assign({}, state, {showBeer: action.beer, loadingOne: false});
      return newState;

    case BEER_ERRORS:
      newState = merge({}, state);
      newState.errors = action.errors;
      return newState;

    case REMOVE_BEER:
      newState = merge({}, state);
      delete newState[action.beerId];
      return newState;

    case RESET_BEER:
      newState = merge({}, state);
      newState.loadingOne = true;
      return newState;

    default:
      return state;
  }
};

export default BeerReducer;
