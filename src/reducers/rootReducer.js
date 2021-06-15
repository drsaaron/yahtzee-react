
import { combineReducers } from 'redux';
import DiceReducer from './DiceReducer';
import ScoreCardReducer from './ScoreCardReducer';

export default () => combineReducers({
    dice: DiceReducer,
    scoreCard: ScoreCardReducer
});
