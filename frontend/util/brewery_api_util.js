export const fetchBreweries = (success) => {
  $.ajax({
    url: 'api/breweries',
    method: 'GET',
    success
  });
};

export const fetchOneBrewery = (breweryId, success) => {
  $.ajax({
    url: `api/breweries/${breweryId}`,
    method: 'GET',
    success
  });
};

export const createBrewery = (brewery, success) => {
  $.ajax({
    url: 'api/breweries',
    method: 'POST',
    data: brewery,
    success
  });
};

export const updateBrewery = (breweryId, newBrewery, success) => {
  $.ajax({
    url: `api/breweries/${breweryId}`,
    method: 'PATCH',
    data: newBrewery,
    success
  });
};

export const removeBrewery = (breweryId, success) => {
  $.ajax({
    url: `api/breweries/${breweryId}`,
    method: 'DELETE',
    success
  });
};
