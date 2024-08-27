// src/store/actions/authActions.js

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const login = (username) => {
  return (dispatch) => {
    // Simulate successful login
    dispatch({
      type: LOGIN_SUCCESS,
      payload: username
    });

    // Optionally save user to localStorage for persistence
    localStorage.setItem('user', username);
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT
    });

    // Remove user from localStorage
    localStorage.removeItem('user');
  };
};
