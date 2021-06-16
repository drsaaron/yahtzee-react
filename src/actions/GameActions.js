
import ActionTypes from './ActionTypes';

export function newGame() {
    return (dispatch) => {
	dispatch({type: ActionTypes.NEW_GAME});
    };
}
