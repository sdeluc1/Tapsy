export const fetchUser = (userId, success, error) => {
  $.ajax({
    url: `api/users/${userId}`,
    method: 'GET',
    success,
    error
  });
};
