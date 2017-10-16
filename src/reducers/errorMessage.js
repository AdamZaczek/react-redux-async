import {
  FETCH_COLLECTION,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_FAILURE,
} from '../constants/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_FAILURE:
      return action.errorMessage;
    case FETCH_COLLECTION_SUCCESS:
    case FETCH_COLLECTION:
      return null;
    default:
      return state;
  }
};