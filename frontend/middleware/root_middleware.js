import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BeerMiddleware from './beer_middleware';
import createLogger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BeerMiddleware,
  createLogger()
);

export default RootMiddleware;
