export const LOG_OUT = 'LOG_OUT';
export const AUTH = "AUTH";
export const LOGIN = 'LOGIN';


export const login = response => dispatch => {
    dispatch({
        type: LOGIN,
        payload: response.data
    });
};
  
export const logout = response => dispatch => {
    dispatch({
        type: LOG_OUT,
        payload: response.data
    });
};
  
export const authorize = response => dispatch => {
  
    dispatch({
      type: AUTH,
      payload: response.data
    });
};
  

  
  