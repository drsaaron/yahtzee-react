
import { combineReducers } from 'redux';
import DiceReducer from './DiceReducer';

export default () => combineReducers({
    dice: DiceReducer
});
