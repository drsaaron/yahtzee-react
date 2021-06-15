
import ActionTypes from './ActionTypes';

export function takeScore(scoreType, score) {
    console.log("taking score " + scoreType);
    return (dispatch) => {
	dispatch({type: ActionTypes.SCORE_TAKEN, scoreType: scoreType, score: score});
    }
}
