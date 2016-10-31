import { REQUEST_SEARCH, receiveSearch } from '../actions/search_actions';
import { fetchSearchBeers } from '../util/search_api_util';

export default ({ getState, dispatch }) => next => action => {
  const searchSuccess = (results) => dispatch(receiveSearch(results));
  switch(action.type){
    case REQUEST_SEARCH:
      fetchSearchBeers(action.query, searchSuccess);
      break;

    default:
      return next(action);
  }
}
