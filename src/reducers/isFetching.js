import {
  FETCH_COLLECTION,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
} from '../constants/actionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
      return true;
    case FETCH_COLLECTION_FAILURE:
    case FETCH_COLLECTION_SUCCESS:
      return false; 
    default:
      return state;
  }
};

export const isFetching = state => state.isFetching;