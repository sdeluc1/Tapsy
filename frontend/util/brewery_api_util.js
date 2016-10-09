export const fetchBreweries = (success, error) => {
  $.ajax({
    url: 'api/breweries',
    method: 'GET',
    success,
    error
  });
};

export const fetchOneBrewery = (breweryId, success, error) => {
  $.ajax({
    url: `api/breweries/${breweryId}`,
    method: 'GET',
    success,
    error
  });
};

export const createBrewery = (brewery, success, error) => {
  $.ajax({
    url: 'api/breweries',
    method: 'POST',
    data: brewery,
    success,
    error
  });
};

export const updateBrewery = (breweryId, newBrewery, success, error) => {
  $.ajax({
    url: `api/breweries/${breweryId}`,
    method: 'PATCH',
    data: newBrewery,
    success,
    error
  });
};

export const removeBrewery = (breweryId, success, error) => {
  $.ajax({
    url: `api/breweries/${breweryId}`,
    method: 'DELETE',
    success,
    error
  });
};
