
import ActionTypes from './ActionTypes';

export function takeScore(scoreType, score) {
    return (dispatch) => {
	dispatch({type: ActionTypes.SCORE_TAKEN, scoreType: scoreType, score: score});
    }
}

export function updatePossibleScore(scoreType, score) {
    return (dispatch) => {
	dispatch({type: ActionTypes.UPDATE_POSSIBLE_SCORE, scoreType: scoreType, score: score});
    }
}    
