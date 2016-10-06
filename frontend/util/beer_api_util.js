export const fetchBeers = (success, error) => {
  $.ajax({
    url: 'api/beers',
    method: 'GET',
    success,
    error
  });
};

export const fetchOneBeer = (beerId, success, error) => {
  $.ajax({
    url: `api/beers/${beerId}`,
    method: 'GET',
    success,
    error
  });
};

export const createBeer = (beer, success, error) => {
  $.ajax({
    url: 'api/beers',
    method: 'POST',
    data: beer,
    success,
    error
  });
};

export const updateBeer = (beerId, newBeer, success, error) => {
  $.ajax({
    url: `api/beers/${beerId}`,
    method: 'PATCH',
    data: newBeer,
    success,
    error
  });
};

export const removeBeer = (beerId, success, error) => {
  $.ajax({
    url: `api/beers/${beerId}`,
    method: 'DELETE',
    success,
    error
  });
};
