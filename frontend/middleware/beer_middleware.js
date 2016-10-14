import {
  REQUEST_BEERS,
  REQUEST_BEER,
  REMOVE_BEER,
  UPDATE_BEER,
  CREATE_BEER,
  receiveBeers,
  receiveBeer,
  updateBeer,
  removeBeer,
  createBeer,
  receiveErrors
} from '../actions/beer_actions';
import * as beerAPI from '../util/beer_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successBeers = data => dispatch(receiveBeers(data));
  const successBeer = data => dispatch(receiveBeer(data));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case REQUEST_BEERS:
      beerAPI.fetchBeers(successBeers, errorCallback);
      break;
    case REQUEST_BEER:
      beerAPI.fetchOneBeer(action.beerId, successBeer, errorCallback);
      break;
    case REMOVE_BEER:
      beerAPI.removeBeer(action.beerId, next(action), errorCallback);
      break;
    case UPDATE_BEER:
      beerAPI.updateBeer(action.beerId, action.newBeer, successBeers, errorCallback);
      break;
    case CREATE_BEER:
      beerAPI.createBeer(action.beer, (data) => {
        successBeer(data);
        action.callback(data.id);
      }, errorCallback);
      break;
    default:
      return next(action);
  }
}
