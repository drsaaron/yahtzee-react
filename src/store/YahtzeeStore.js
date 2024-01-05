
import {createStore, applyMiddleware} from 'redux';
import createRootReducer from '../reducers/rootReducer';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(createRootReducer(), {}, applyMiddleware(thunk, logger));

export default store;
