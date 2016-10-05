export const REQUEST_BEERS = "REQUEST BEERS";
export const REQUEST_BEER = "REQUEST BEER";
export const RECEIVE_BEERS = "RECEIVE BEERS";
export const RECEIVE_BEER = "RECEIVE BEER";
export const REMOVE_BEER = "REMOVE_BEER";
export const UPDATE_BEER = "UPDATE_BEER";
export const CREATE_BEER = "CREATE_BEER";

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
