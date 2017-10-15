import { combineReducers } from 'redux';
import collection from './collection';
import isFetching from './isFetching';
import errorMessage from './errorMessage';

export default combineReducers({
  collection,
  isFetching,
  errorMessage,
});