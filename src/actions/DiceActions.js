
import ActionTypes from './ActionTypes';
import { cloneArray } from '../reducers/utilityFunctions';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function rollDice(dice) {

    return (dispatch) => {
	var newDice = cloneArray(dice);
	newDice.map(d => {
	    if (!d.keeper) {
		var newValue = getRandomInt(6) + 1;
		d.value = newValue;
	    }
	    return d;
	});

	dispatch({
	    type: ActionTypes.DICE_ROLLED,
	    dice: newDice
	});
    };
}

export function toggleDieKeeper(dice, die, newValue) {

    return (dispatch) => {  
	var newDice = cloneArray(dice);
	newDice.find(d => d.key === die.key).keeper = newValue;
	
	dispatch({
	    type: ActionTypes.DIE_KEEPER_CHANGE,
	    key: die.key,
	    keeper: newValue,
	    dice: newDice
	});
    };
}

export function clearKeepers(dice) {

    return (dispatch) => {
	var newDice = cloneArray(dice);
	for (var i = 0; i < newDice.length; i++) {
	    newDice[i].keeper = false;
	}
	dispatch({type: ActionTypes.CLEAR_KEEPERS, dice: newDice });
    };
}

export function keepAll(dice) {

    return (dispatch) => {
	var newDice = cloneArray(dice);
	for (var i = 0; i < newDice.length; i++) {
	    newDice[i].keeper = true;
	}
	dispatch({type: ActionTypes.KEEP_ALL, dice: newDice });
    };
}
