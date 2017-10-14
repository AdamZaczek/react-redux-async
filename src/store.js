import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const store = composeWithDevTools(
    applyMiddleware(thunk)
)(createStore)(reducers);

export default store;