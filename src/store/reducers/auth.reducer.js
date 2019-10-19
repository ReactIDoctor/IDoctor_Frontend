import {LOGIN, AUTH, LOG_OUT} from '../actions/auth.actions';

const initialState = {
    username: '',
    status: ''
};
  
export default function(state = initialState, action) {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          username: action.payload
        };
  
      case AUTH:
        return {
          ...state,
          status: 'AUTHORIZED'
        };
  
      case LOG_OUT:
        return state;
  
      default:
        return state;
    }
}

