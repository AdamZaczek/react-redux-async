import { combineReducers } from 'redux';
import collection from './collection';
import isFetching from './isFetching';
import errorMessage from './errorMessage';
import isInteracting from './isInteracting';

export default combineReducers({
  collection,
  isFetching,
  errorMessage,
  isInteracting,
});