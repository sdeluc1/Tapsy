export const addFollow = (follow, success, error) => {
  debugger
  $.ajax({
    url: 'api/follows',
    method: 'POST',
    data: follow,
    success,
    error
  });
};

export const removeFollow = (followId, success, error) => {
  $.ajax({
    url: `api/follows/${followId}`,
    method: 'DELETE',
    success,
    error
  });
};

export const requestFollows = (success, error) => {
  $.ajax({
    url: 'api/follows',
    method: 'GET',
    success,
    error
  });
};
