
import ActionTypes from './ActionTypes';
import { rollDice, clearKeepers } from './DiceActions';

export function takeScore(scoreType, score, dice) {
    return (dispatch) => {
	dispatch({type: ActionTypes.SCORE_TAKEN, scoreType: scoreType, score: score});
	dispatch(clearKeepers(dice));
	dispatch(rollDice(dice));
    }
}

export function updatePossibleScore(scoreType, score) {
    return (dispatch) => {
	dispatch({type: ActionTypes.UPDATE_POSSIBLE_SCORE, scoreType: scoreType, score: score});
    }
}    
