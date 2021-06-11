
import { combineReducers } from 'redux';
import DieReducer from './DieReducer';

export default () => combineReducers({
    die: DieReducer
});
