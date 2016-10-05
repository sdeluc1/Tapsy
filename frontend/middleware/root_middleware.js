import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BeerMiddleware from './beer_middleware';
import BreweryMiddleware from './brewery_middleware';
import createLogger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BeerMiddleware,
  BreweryMiddleware,
  createLogger()
);

export default RootMiddleware;
