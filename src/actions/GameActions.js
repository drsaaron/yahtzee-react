
import ActionTypes from './ActionTypes';
import { rollDice } from './DiceActions';

export function newGame() {
    return (dispatch, getState) => {
	dispatch({type: ActionTypes.NEW_GAME});
	dispatch(rollDice(getState().dice.dice));
    };
}
