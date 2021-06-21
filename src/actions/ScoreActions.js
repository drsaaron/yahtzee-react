
import ActionTypes from './ActionTypes';
import { rollDice, clearKeepers } from './DiceActions';
import ScoreTypes from './ScoreTypes';
import { cloneArray } from '../reducers/utilityFunctions';

const UPPER_PANEL = [ ScoreTypes.ACES, ScoreTypes.TWOS, ScoreTypes.THREES, ScoreTypes.FOURS, ScoreTypes.FIVES, ScoreTypes.SIXES ];
const LOWER_PANEL = [ ScoreTypes.THREE_OF_A_KIND, ScoreTypes.FOUR_OF_A_KIND, ScoreTypes.FULL_HOUSE, ScoreTypes.SMALL_STRAIGHT, ScoreTypes.LARGE_STRAIGHT, ScoreTypes.YAHTZEE, ScoreTypes.CHANCE ];

function accumulateScore(scores, panel) {
    var panelScore = 0;
    for (var i = 0; i < panel.length; i++) {
	var scoreType = panel[i];
	panelScore += scores.find(s => s.type === scoreType).score;
    }
    return panelScore;
}

export function takeScore(scoreType, score, dice, scoreCard) {
    return (dispatch, getState) => {

	var scores = cloneArray(scoreCard.scores);
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

	// dispatch events.  Update the scorecard state, clar the ckeepers, and roll the dice.
	dispatch({type: ActionTypes.SCORE_TAKEN, scoreType: scoreType, score: score, scores: scores, upperPanelScore: upperPanelScore, lowerPanelScore: lowerPanelScore, totalScore: total, bonusEarned: bonusEarned});
	dispatch(clearKeepers(getState().dice.dice));
	dispatch(rollDice(getState().dice.dice));
    }
}

export function updatePossibleScore(scoreType, score) {
    return (dispatch) => {
	dispatch({type: ActionTypes.UPDATE_POSSIBLE_SCORE, scoreType: scoreType, score: score});
    }
}    
