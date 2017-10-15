import {
  FETCH_COLLECTION,
  FETCH_COLLECTION_FAILURE,
  FETCH_COLLECTION_SUCCESS
} from '../constants/actionTypes';

const requestCollection = () => ({
  type: FETCH_COLLECTION,
});

const fetchCollectionSuccess = collection => ({
    type: FETCH_COLLECTION_SUCCESS,
    collection,
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
