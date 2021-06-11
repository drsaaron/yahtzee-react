
import ActionTypes from '../actions/ActionTypes';

const dieValues = [
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
    die: dieValues
};

export default function DieReducer(state = initialState, action) {

    switch (action.type) {
    case ActionTypes.DIE_ROLLED:
	return {
	    ...state,
	    die: action.die
	};

    default:
	return {
	    ...state
	};
    }
}
