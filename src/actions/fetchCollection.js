import {
  FETCH_COLLECTION,
  FETCH_COLLECTION_FAILURE,
  FETCH_COLLECTION_SUCCESS
} from '../constants/actionTypes';

const getCollection = collection => collection.map(collectionItem => collectionItem.cardId);
const getCollectionByIds = collection => collection.reduce((collectionbyId, obj) => {
  collectionbyId[obj.cardId] = {...obj};
  return collectionbyId;  
}, {});

const requestCollection = () => ({
  type: FETCH_COLLECTION,
});

const fetchCollectionSuccess = collection => ({
    type: FETCH_COLLECTION_SUCCESS,
    collection: getCollection(collection),
    collectionByIds: getCollectionByIds(collection),
});

const fetchCollectionFailure = errorMessage => ({
  type: FETCH_COLLECTION_FAILURE,
  errorMessage,
});

export const fetchCollection = url => async dispatch => {
    try {
      dispatch(requestCollection());
      const getCollection = await fetch(url);
      const getCollectionToJson = await getCollection.json();
      dispatch(fetchCollectionSuccess(getCollectionToJson));
    } catch(err) {
      dispatch(fetchCollectionFailure(err))
    }
};

export const getCollectionItemsIds = state => state.collection.collection;
export const getCollectionData = state => {
  const ids = getCollectionItemsIds(state);
  return ids.map(id => state.collection.collectionByIds[id]); 
};


