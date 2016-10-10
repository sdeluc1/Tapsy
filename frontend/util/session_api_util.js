export const signup = (user, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/users',
    data: user,
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/session',
    data: user,
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    type: 'DELETE',
    url: '/api/session',
    success,
    error
  });
};

export const updateCurrentUser = (user, success, error) => {
  $.ajax({
    url: `api/users/${user.id}`,
    method: 'PATCH',
    data: user,
    success,
    error
  });
};
