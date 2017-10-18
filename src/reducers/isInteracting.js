import {
  INTERACT,
  INTERACT_SUCCESS,
  INTERACT_FAILURE,
} from '../constants/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case INTERACT:
      return true;
    case INTERACT_FAILURE:
    case INTERACT_SUCCESS:
      return false; 
    default:
      return state;
  }
};

export const isInteracting = state => state.isInteracting;