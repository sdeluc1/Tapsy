import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BeerReducer from './beer_reducer';
import BreweryReducer from './brewery_reducer';
import ReviewReducer from './review_reducer';
import UserReducer from './user_reducer';
import ModalReducer from './modal_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  beer: BeerReducer,
  breweries: BreweryReducer,
  reviews: ReviewReducer,
  user: UserReducer,
  modal: ModalReducer 
});

export default RootReducer;
