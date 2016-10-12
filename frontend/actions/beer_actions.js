export const REQUEST_BEERS = "REQUEST_BEERS";
export const REQUEST_BEER = "REQUEST_BEER";
export const RECEIVE_BEERS = "RECEIVE_BEERS";
export const RECEIVE_BEER = "RECEIVE_BEER";
export const REMOVE_BEER = "REMOVE_BEER";
export const UPDATE_BEER = "UPDATE_BEER";
export const CREATE_BEER = "CREATE_BEER";
export const BEER_ERRORS = "BEER_ERRORS";
export const RESET_BEER = "RESET_BEER";

export const requestBeers = () => ({
  type: REQUEST_BEERS
});

export const requestBeer = (beerId) => ({
  type: REQUEST_BEER,
  beerId
});

export const receiveBeers = (beers) => ({
  type: RECEIVE_BEERS,
  beers
});

export const receiveBeer = (beer) => ({
  type: RECEIVE_BEER,
  beer
});

export const removeBeer = (beerId) => ({
  type: REMOVE_BEER,
  beerId
});

export const updateBeer = (beerId, newBeer) => ({
  type: UPDATE_BEER,
  beerId,
  newBeer
});

export const createBeer = (beer) => ({
  type: CREATE_BEER,
  beer
});

export const receiveErrors = (errors) => ({
  type: BEER_ERRORS,
  errors
});

export const resetBeer = () => ({
  type: RESET_BEER
});
