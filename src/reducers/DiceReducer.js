
import ActionTypes from '../actions/ActionTypes';
import { cloneArray } from './utilityFunctions';

const diceValues = [
	    {
		key: 1,
		value: 1,
		keeper: false
	    },
	    {
		key: 2,
		value: 2,
		keeper: false
	    },
	    {
		key: 3,
		value: 3,
		keeper: false
	    },
	    {
		key: 4,
		value: 4,
		keeper: false
	    },
	    {
		key: 5,
		value: 5,
		keeper: false
	    }
];

const initialState = {
    dice: diceValues,
    rollCount: 0
};

function clearKeepers(dice) {
    for (var i = 0; i < dice.length; i++) {
	dice[i].keeper = false;
    }
}

export default function DiceReducer(state = initialState, action) {

    switch (action.type) {
    case ActionTypes.DICE_ROLLED:
	return {
	    ...state,
	    dice: action.dice,
	    rollCount: state.rollCount + 1
	};

    case ActionTypes.SCORE_TAKEN:
	return {
	    ...state,
	    rollCount: 0
	};
	
    case ActionTypes.DIE_KEEPER_CHANGE:
	var key = action.key;
	var keeper = action.keeper;

	var dice = cloneArray(state.dice);
	dice.find(d => d.key === key).keeper = keeper;

	return {...state, dice: dice };
	
    case ActionTypes.NEW_GAME:
	dice = cloneArray(state.dice);
	clearKeepers(dice);

	return {...state, rollCount: 0, dice: dice};
	
    case ActionTypes.CLEAR_KEEPERS:
	dice = cloneArray(state.dice);
	clearKeepers(dice);

	return {...state, dice: dice };

    case ActionTypes.KEEP_ALL:
	dice = cloneArray(state.dice);
	for (var i = 0; i < dice.length; i++) {
	    dice[i].keeper = true;
	}

	return {...state, dice: dice }
	
    default:
	return {
	    ...state
	};
    }
}
