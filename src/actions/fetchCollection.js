import { FETCH_COLLECTION } from '../constants/actionTypes';

const fetchCollectionSuccess = collection => {
  return {
    type: FETCH_COLLECTION,
    collection,
  }
};

export const fetchCollection = url => async dispatch => {
    const rateRes = await fetch(url);
    const resToJson = await rateRes.json();
    dispatch(fetchCollectionSuccess(resToJson));
};