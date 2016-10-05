import {
  RECEIVE_BEERS,
  RECEIVE_BEER,
  REMOVE_BEER,
  UPDATE_BEER,
  CREATE_BEER
} from '../actions/beer_actions';
import merge from 'lodash/merge';

const BeerReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_BEERS:
      return action.beers;

    case RECEIVE_BEER:
      const addBeer = {[action.beer.id]: action.beer};
      newState = merge({}, state, addBeer);
      return newState;

    // case REMOVE_BEER:
    //   newState = merge({}, state);
    //   delete newState[action.beerId];
    //   return newState;
    //
    // case UPDATE_BEER:
    //   newState = merge({}, state);
    //   newState[beerId] = newBeer;
    //   return newState;
    //
    // case CREATE_BEER:
    //   newState = merge({}, state, {});


    default:
      return state;
  }
};

export default BeerReducer;
