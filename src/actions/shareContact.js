import {
  SHARE_CONTACT,
  SHARE_CONTACT_FAILURE,
  SHARE_CONTACT_SUCCESS
} from '../constants/actionTypes';

const shareContact = () => ({
  type: SHARE_CONTACT,
});

const shareContactSuccess = contact => ({
    type: SHARE_CONTACT_SUCCESS,
    contact,
});

const shareContactFailure = error => ({
  type: SHARE_CONTACT_FAILURE,
  error,
});

export const shareContact = url => async dispatch => {
    try {
      dispatch(shareContact());
      setTimeout(() => {
        dispatch(shareContactSuccess());
      }, 2000);
    } catch(err) {
      dispatch(shareContactFailure(err))
    }
};
