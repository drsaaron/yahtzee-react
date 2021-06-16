import ActionTypes from '../actions/ActionTypes';
import ScoreTypes from '../actions/ScoreTypes';

const UPPER_PANEL = [ ScoreTypes.ACES, ScoreTypes.TWOS, ScoreTypes.THREES, ScoreTypes.FOURS, ScoreTypes.FIVES, ScoreTypes.SIXES ];
const LOWER_PANEL = [ ScoreTypes.THREE_OF_A_KIND, ScoreTypes.FOUR_OF_A_KIND, ScoreTypes.FULL_HOUSE, ScoreTypes.SMALL_STRAIGHT, ScoreTypes.LARGE_STRAIGHT, ScoreTypes.YAHTZEE, ScoreTypes.CHANCE ];

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

function accumulateScore(scores, panel) {
    var panelScore = 0;
    for (var i = 0; i < panel.length; i++) {
	var type = panel[i];
	panelScore += scores.find(s => s.type === type).score;
    }
    return panelScore;
}

export default function ScoreCardReducer(state = initialState, action) {
    switch(action.type) {

    case ActionTypes.SCORE_TAKEN:
	var scoreType = action.scoreType;
	var score = action.score;

	var scores = state.scores;
	var index = scores.findIndex(s => s.type === scoreType);
	scores[index].score = score;
	scores[index].taken = true;

	// update scores.
	var upperPanelScore = accumulateScore(scores, UPPER_PANEL);
	var lowerPanelScore = accumulateScore(scores, LOWER_PANEL);
	var total = upperPanelScore + lowerPanelScore;

	// done
	return { ...state, scores: scores, upperPanelTotal: upperPanelScore, lowerPanelTotal: lowerPanelScore, total: total };

    case ActionTypes.NEW_GAME:
	upperPanelScore = 0;
	lowerPanelScore = 0;
	total = 0;

	scores = state.scores;
	for (var i = 0; i < scores.length; i++) {
	    scores[i].taken = false;
	    scores[i].score = 0;
	}

	return { ...state, scores: scores, upperPanelTotal: upperPanelScore, lowerPanelTotal: lowerPanelScore, total: total };
	
    default:
	return { ...state };
    }
}
