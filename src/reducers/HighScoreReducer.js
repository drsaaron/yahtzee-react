import ActionTypes from '../actions/ActionTypes';

const initialState = {
    name: '',
    highScore: 0,
    date: -1
};

export default function HighScoreReducer(state = initialState, action) {
    switch (action.type) {
    case ActionTypes.HIGH_SCORE_RETRIEVED:
	console.log("action.highScore: " + JSON.stringify(action.highScore));
	return {
	    ...state,
	    ...action.highScore
	};

    default:
	return state;
    };
};
