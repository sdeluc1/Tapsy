import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BeerReducer from './beer_reducer';
import BreweryReducer from './brewery_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  beer: BeerReducer,
  brewery: BreweryReducer
});

export default RootReducer;
