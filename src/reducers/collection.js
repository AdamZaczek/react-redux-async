import {
  FETCH_COLLECTION_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  collection: [],
  collectionByIds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_SUCCESS:
      const { collection, collectionByIds } = action;
      return {
        collection,
        collectionByIds,
      };
    default:
      return state;
  }
};

const getCollectionItemsIds = state => state.collection.collection;
export const getCollectionData = state => {
  const ids = getCollectionItemsIds(state);
  return ids.map(id => state.collection.collectionByIds[id]); 
};

