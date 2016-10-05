export const fetchBeers = (success) => {
  $.ajax({
    url: 'api/beers',
    method: 'GET',
    success
  });
};

export const fetchOneBeer = (beerId, success) => {
  $.ajax({
    url: `api/beers/${beerId}`,
    method: 'GET',
    success
  });
};

export const createBeer = (beer, success) => {
  $.ajax({
    url: 'api/beers',
    method: 'POST',
    data: beer,
    success
  });
};

export const updateBeer = (beerId, newBeer, success) => {
  $.ajax({
    url: `api/beers/${beerId}`,
    method: 'PATCH',
    data: newBeer,
    success
  });
};

export const removeBeer = (beerId, success) => {
  $.ajax({
    url: `api/beers/${beerId}`,
    method: 'DELETE',
    success
  });
};
