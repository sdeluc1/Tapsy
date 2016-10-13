import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BeerReducer from './beer_reducer';
import BreweryReducer from './brewery_reducer';
import ReviewReducer from './review_reducer';
import FollowReducer from './follow_reducer';
import UserReducer from './user_reducer';
import CommentReducer from './comment_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  beer: BeerReducer,
  breweries: BreweryReducer,
  reviews: ReviewReducer,
  user: UserReducer,
  follows: FollowReducer,
  comments: CommentReducer
});

export default RootReducer;
