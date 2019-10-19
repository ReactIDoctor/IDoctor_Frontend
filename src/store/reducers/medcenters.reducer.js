import {GET_ALL_MEDCENTERS} from '../actions/medcenters.actions';

const initialState = {
    medcenters:[]
};

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_MEDCENTERS:
        return {
          ...state,
          doctors: action.payload
        };
  
      default:
        return state;
    }
}

