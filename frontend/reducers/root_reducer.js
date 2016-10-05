import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BeerReducer from './beer_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  beer: BeerReducer 
});

export default RootReducer;
