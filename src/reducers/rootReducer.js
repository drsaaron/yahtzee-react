
import { combineReducers } from 'redux';
import DiceReducer from './DiceReducer';
import ScoreCardReducer from './ScoreCardReducer';
import HighScoreReducer from './HighScoreReducer';

const rootReducer = () => combineReducers({
    dice: DiceReducer,
    scoreCard: ScoreCardReducer,
    highScore: HighScoreReducer
});

export default rootReducer;
