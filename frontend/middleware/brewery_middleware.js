import {
  REQUEST_BREWERIES,
  REQUEST_BREWERY,
  REMOVE_BREWERY,
  UPDATE_BREWERY,
  CREATE_BREWERY,
  receiveBreweries,
  receiveBrewery,
  updateBrewery,
  removeBrewery,
  createBrewery
} from '../actions/brewery_actions';
import * as breweryAPI from '../util/brewery_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successBreweries = data => dispatch(receiveBreweries(data));
  const successBrewery = data => dispatch(receiveBrewery(data));

  switch(action.type) {
    case REQUEST_BREWERIES:
      breweryAPI.fetchBreweries(successBreweries);
      break;
    case REQUEST_BREWERY:
      breweryAPI.fetchOneBrewery(action.breweryId, successBrewery);
      break;
    case REMOVE_BREWERY:
      breweryAPI.removeBrewery(action.breweryId, next(action));
      break;
    case UPDATE_BREWERY:
      breweryAPI.updateBrewery(action.breweryId, action.newBrewery, successBreweries);
      break;
    case CREATE_BREWERY:
      breweryAPI.createBrewery(action.brewery, successBrewery);
      break;
    default:
      return next(action);
  }
}
