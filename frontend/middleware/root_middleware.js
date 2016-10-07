import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BeerMiddleware from './beer_middleware';
import BreweryMiddleware from './brewery_middleware';
import ReviewMiddleware from './review_middleware';
import createLogger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BeerMiddleware,
  BreweryMiddleware,
  ReviewMiddleware,
  createLogger()
);

export default RootMiddleware;
