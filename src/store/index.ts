import { rootReducer } from './reducers';
import { legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = legacy_createStore(rootReducer, composeWithDevTools());
