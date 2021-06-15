import ActionTypes from '../actions/ActionTypes';
import ScoreTypes from '../actions/ScoreTypes';

const initialState = {
    upperPanelTotal: 0,
    lowerPanelTotal: 0,
    total: 0,

    scores: [
	{ type: ScoreTypes.ACES,  score: 0, taken: false },
	{ type: ScoreTypes.TWOS, score: 0, taken: false },
	{ type: ScoreTypes.THREES, score: 0, taken: false },
	{ type: ScoreTypes.FOURS, score: 0, taken: false },
	{ type: ScoreTypes.FIVES, score: 0, taken: false },
	{ type: ScoreTypes.SIXES, score: 0, taken: false },

	{ type: ScoreTypes.THREE_OF_A_KIND, score: 0, taken: false },
	{ type: ScoreTypes.FOUR_OF_A_KIND, score: 0, taken: false },
	{ type: ScoreTypes.FULL_HOUSE, score: 0, taken: false },
	{ type: ScoreTypes.SMALL_STRAIGHT, score: 0, taken: false },
	{ type: ScoreTypes.LARGE_STRAIGHT, score: 0, taken: false },
	{ type: ScoreTypes.YAHTZEE, score: 0, taken: false },
	{ type: ScoreTypes.CHANCE, score: 0, taken: false }
    ]
};

export default function ScoreCardReducer(state = initialState, action) {
    switch(action.type) {

    case ActionTypes.SCORE_TAKEN:
	var scoreType = action.scoreType;
	var score = action.score;

	var scores = state.scores;
	var index = scores.findIndex(s => s.type === scoreType);
	scores[index].score = score;
	scores[index].taken = true;

	return { ...state, scores: scores };
	
    default:
	return { ...state };
    }
}
