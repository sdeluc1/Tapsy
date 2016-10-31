export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const requestSearch = (query) => ({
  type: REQUEST_SEARCH,
  query
});

export const receiveSearch = (results) => ({
  type: RECEIVE_SEARCH,
  results
});
