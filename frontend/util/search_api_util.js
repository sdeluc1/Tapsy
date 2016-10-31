export const fetchSearchBeers = (query, success, error) => {
  $.ajax({
    url: 'api/search',
    method: 'GET',
    data: { query: query },
    success,
    error
  });
};
