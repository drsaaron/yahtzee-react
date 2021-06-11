
import {createStore, applyMiddleware} from 'redux';
import createRootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(createRootReducer(), {}, applyMiddleware(thunk));

export default store;
