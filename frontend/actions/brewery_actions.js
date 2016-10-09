export const REQUEST_BREWERIES = "REQUEST BREWERIES";
export const REQUEST_BREWERY = "REQUEST BREWERY";
export const RECEIVE_BREWERIES = "RECEIVE BREWERIES";
export const RECEIVE_BREWERY = "RECEIVE BREWERY";
export const REMOVE_BREWERY = "REMOVE_BREWERY";
export const UPDATE_BREWERY = "UPDATE_BREWERY";
export const CREATE_BREWERY = "CREATE_BREWERY";
export const BREWERY_ERRORS = "BREWERY_ERRORS";

export const requestBreweries = () => ({
  type: REQUEST_BREWERIES
});

export const requestBrewery = (breweryId) => {
  return {
    type: REQUEST_BREWERY,
    breweryId
  };
};

export const receiveBreweries = (breweries) => ({
  type: RECEIVE_BREWERIES,
  breweries
});

export const receiveBrewery = (brewery) => ({
  type: RECEIVE_BREWERY,
  brewery
});

export const removeBrewery = (breweryId) => ({
  type: REMOVE_BREWERY,
  breweryId
});

export const updateBrewery = (breweryId, newBrewery) => ({
  type: UPDATE_BREWERY,
  breweryId,
  newBrewery
});

export const createBrewery = (brewery) => ({
  type: CREATE_BREWERY,
  brewery
});

export const receiveErrors = (errors) => ({
  type: BREWERY_ERRORS,
  errors
});
