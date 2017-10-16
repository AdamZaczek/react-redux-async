import {
  FETCH_COLLECTION_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  collection: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_SUCCESS:
      return action.collection
    default:
      return state;
  }
};

