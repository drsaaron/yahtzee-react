
import { combineReducers } from 'redux';
import DiceReducer from './DiceReducer';
import ScoreCardReducer from './ScoreCardReducer';

const rootReducer = () => combineReducers({
    dice: DiceReducer,
    scoreCard: ScoreCardReducer
});

export default rootReducer;
