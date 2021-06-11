
import ActionTypes from './ActionTypes';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function rollDice(dice) {

    return (dispatch) => {
	dice.map(d => {
	    if (!d.keeper) {
		var newValue = getRandomInt(6) + 1;
		d.value = newValue;
	    }
	});

	dispatch({
	    type: ActionTypes.DICE_ROLLED,
	    dice
	});
    };
}

export function toggleDieKeeper(die, newValue) {

    return (dispatch) => {
	die.keeper = newValue;
	dispatch({
	    type: ActionTypes.DIE_KEEPER_CHANGE,
	    die
	});
    }
}
