import ActionTypes from '../actions/ActionTypes';
import ScoreTypes from '../actions/ScoreTypes';
import { cloneArray } from './utilityFunctions';

const UPPER_PANEL = [ ScoreTypes.ACES, ScoreTypes.TWOS, ScoreTypes.THREES, ScoreTypes.FOURS, ScoreTypes.FIVES, ScoreTypes.SIXES ];
const LOWER_PANEL = [ ScoreTypes.THREE_OF_A_KIND, ScoreTypes.FOUR_OF_A_KIND, ScoreTypes.FULL_HOUSE, ScoreTypes.SMALL_STRAIGHT, ScoreTypes.LARGE_STRAIGHT, ScoreTypes.YAHTZEE, ScoreTypes.CHANCE ];

const initialState = {
    upperPanelTotal: 0,
    lowerPanelTotal: 0,
    total: 0,
    bonusEarned: false,

    scores: [
	{ type: ScoreTypes.ACES, score: 0, taken: false, possibleScore: 0 },
	{ type: ScoreTypes.TWOS, score: 0, taken: false, possibleScore: 0 },
	{ type: ScoreTypes.THREES, score: 0, taken: false, possibleScore: 0 },
	{ type: ScoreTypes.FOURS, score: 0, taken: false, possibleScore: 0 },
	{ type: ScoreTypes.FIVES, score: 0, taken: false, possibleScore: 0 },
	{ type: ScoreTypes.SIXES, score: 0, taken: false, possibleScore: 0 },

	{ type: ScoreTypes.THREE_OF_A_KIND, score: 0, taken: false, possibleScore: 0 },
	{ type: ScoreTypes.FOUR_OF_A_KIND, score: 0, taken: false, possibleScore: 0 },
	{ type: ScoreTypes.FULL_HOUSE, score: 0, taken: false, possibleScore: 0 },
	{ type: ScoreTypes.SMALL_STRAIGHT, score: 0, taken: false, possibleScore: 0 },
	{ type: ScoreTypes.LARGE_STRAIGHT, score: 0, taken: false, possibleScore: 0 },
	{ type: ScoreTypes.YAHTZEE, score: 0, taken: false, possibleScore: 0 },
	{ type: ScoreTypes.CHANCE, score: 0, taken: false, possibleScore: 0 }
    ]
};

function accumulateScore(scores, panel) {
    var panelScore = 0;
    for (var i = 0; i < panel.length; i++) {
	var scoreType = panel[i];
	panelScore += scores.find(s => s.type === scoreType).score;
    }
    return panelScore;
}

export default function ScoreCardReducer(state = initialState, action) {
    switch(action.type) {

    case ActionTypes.SCORE_TAKEN:
	var scoreType = action.scoreType;
	var score = action.score;

	var scores = cloneArray(state.scores);
	var index = scores.findIndex(s => s.type === scoreType);
	scores[index].score = score;
	scores[index].taken = true;
	var bonusEarned = false;

	// update scores.
	var upperPanelScore = accumulateScore(scores, UPPER_PANEL);
	var lowerPanelScore = accumulateScore(scores, LOWER_PANEL);

	// check for bonus
	if (upperPanelScore >= 63) {
	    upperPanelScore += 35;
	    bonusEarned = true;
	}
	
	// calc the total
	var total = upperPanelScore + lowerPanelScore;

	// done
	return { ...state, scores: scores, upperPanelTotal: upperPanelScore, lowerPanelTotal: lowerPanelScore, total: total, bonusEarned: bonusEarned };

    case ActionTypes.UPDATE_POSSIBLE_SCORE:
	scoreType = action.scoreType;
	score = action.score;

	scores = cloneArray(state.scores);
	index = scores.findIndex(s => s.type === scoreType);
	scores[index].possibleScore = score;

	// done
	return { ...state, scores: scores };	
	
    case ActionTypes.NEW_GAME:
	upperPanelScore = 0;
	lowerPanelScore = 0;
	total = 0;

	scores = cloneArray(state.scores);
	for (var i = 0; i < scores.length; i++) {
	    scores[i].taken = false;
	    scores[i].score = 0;
	    scores[i].possibleScore = 0;
	}

	return { ...state, scores: scores, upperPanelTotal: upperPanelScore, lowerPanelTotal: lowerPanelScore, total: total, bonusEarned: false };
	
    default:
	return { ...state };
    }
}
