import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BeerMiddleware from './beer_middleware';
import BreweryMiddleware from './brewery_middleware';
import ReviewMiddleware from './review_middleware';
import UserMiddleware from './user_middleware';
import FollowMiddleware from './follow_middleware';
import CommentMiddleware from './comment_middleware';
import SearchMiddleware from './search_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BeerMiddleware,
  BreweryMiddleware,
  ReviewMiddleware,
  FollowMiddleware,
  UserMiddleware,
  CommentMiddleware,
  SearchMiddleware,
);

export default RootMiddleware;
