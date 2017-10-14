import { FETCH_COLLECTION } from '../constants/actionTypes';

const initialState = {
  collection: [],
};

export default (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
    case FETCH_COLLECTION:
      return {
        ...state,
        collection: action.collection,
      };
    default:
      return state;
  }
};
