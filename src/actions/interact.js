import {
  INTERACT,
  INTERACT_FAILURE,
  INTERACT_SUCCESS
} from '../constants/actionTypes';

const initInteraction = (interactionType, id) => ({
  type: INTERACT,
  interactionType,
  id,
});

const interactSuccess = (interactionType, id) => ({
    type: INTERACT_SUCCESS,
    interactionType,
    id,
});

const interactFailure = error => ({
  type: INTERACT_FAILURE,
  error,
});

export const interact = (interactionType, id) => async dispatch => {
  try {
    dispatch(initInteraction(interactionType, id));
    setTimeout(() => {
      dispatch(interactSuccess(interactionType, id));
    }, 2000);
  } catch(err) {
    dispatch(interactFailure(err))
  }
};
