
import ActionTypes from './ActionTypes';

export function rollDice(dice) {

    return (dispatch) => {
	var newValue = dice[0].value + 1;
	if (newValue > 6) {
	    newValue = 1;
	}
	dice[0].value = newValue;

	dispatch({
	    type: ActionTypes.DICE_ROLLED,
	    dice
	});
    };
}

