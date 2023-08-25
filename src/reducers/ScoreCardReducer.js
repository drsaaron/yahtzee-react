import ActionTypes from '../actions/ActionTypes';
import ScoreTypes from '../actions/ScoreTypes';
import { cloneArray } from './utilityFunctions';
import { calculateScore } from '../actions/Scorers';

const MAX_SCORES = 13;

const initialState = {
    upperPanelTotal: 0,
    lowerPanelTotal: 0,
    total: 0,
    bonusEarned: false,

    // attributes for tracking bonus yahtzee
    yahtzeeEarned: false,
    bonusYahtzeeCount: 0,

    scores: [
	{ type: ScoreTypes.ACES, score: 0, taken: false, possibleScore: '' },
	{ type: ScoreTypes.TWOS, score: 0, taken: false, possibleScore: '' },
	{ type: ScoreTypes.THREES, score: 0, taken: false, possibleScore: '' },
	{ type: ScoreTypes.FOURS, score: 0, taken: false, possibleScore: '' },
	{ type: ScoreTypes.FIVES, score: 0, taken: false, possibleScore: '' },
	{ type: ScoreTypes.SIXES, score: 0, taken: false, possibleScore: '' },

	{ type: ScoreTypes.THREE_OF_A_KIND, score: 0, taken: false, possibleScore: '' },
	{ type: ScoreTypes.FOUR_OF_A_KIND, score: 0, taken: false, possibleScore: '' },
	{ type: ScoreTypes.FULL_HOUSE, score: 0, taken: false, possibleScore: '' },
	{ type: ScoreTypes.SMALL_STRAIGHT, score: 0, taken: false, possibleScore: '' },
	{ type: ScoreTypes.LARGE_STRAIGHT, score: 0, taken: false, possibleScore: '' },
	{ type: ScoreTypes.YAHTZEE, score: 0, taken: false, possibleScore: '' },
	{ type: ScoreTypes.CHANCE, score: 0, taken: false, possibleScore: '' }
    ],

    remainingScores: MAX_SCORES
};

export default function ScoreCardReducer(state = initialState, action) {
    switch(action.type) {

	// if the dice state changed, update possible scores.
    case ActionTypes.DICE_ROLLED:
    case ActionTypes.DIE_KEEPER_CHANGE:
    case ActionTypes.CLEAR_KEEPERS:
    case ActionTypes.KEEP_ALL: {
	let dice = action.dice;
	let scores = state.scores;
	let updatedScores = scores.map(s => {
	    if (!s.taken) {
		s.possibleScore = calculateScore(dice, s.type);
	    }
	    return s;
	});
	
	return {...state, scores: updatedScores};
    }
	
    case ActionTypes.SCORE_TAKEN: {
	let upperPanelScore = action.upperPanelScore;
	let lowerPanelScore = action.lowerPanelScore;
	let totalScore = action.totalScore;
	let scores = action.scores;
	let bonusEarned = action.bonusEarned
	let yahtzeeEarned = action.yahtzeeEarned;
	let bonusYahtzeeCount = action.bonusYahtzeeCount;
	let remainingScores = state.remainingScores - 1;

	return { ...state, scores: scores, upperPanelTotal: upperPanelScore, lowerPanelTotal: lowerPanelScore, total: totalScore, bonusEarned: bonusEarned, yahtzeeEarned: yahtzeeEarned, bonusYahtzeeCount: bonusYahtzeeCount, remainingScores: remainingScores };
    }

    case ActionTypes.UPDATE_POSSIBLE_SCORE: {
	let scoreType = action.scoreType;
	let score = action.score;

	let scores = cloneArray(state.scores);
	let index = scores.findIndex(s => s.type === scoreType);
	scores[index].possibleScore = score > 0 ? score : '';

	// done
	return { ...state, scores: scores };
    }
	
    case ActionTypes.NEW_GAME: {
	let upperPanelScore = 0;
	let lowerPanelScore = 0;
	let total = 0;

	let scores = cloneArray(state.scores);
	for (let i = 0; i < scores.length; i++) {
	    scores[i].taken = false;
	    scores[i].score = 0;
	    scores[i].possibleScore = '';
	}

	return { ...state, scores: scores, upperPanelTotal: upperPanelScore, lowerPanelTotal: lowerPanelScore, total: total, bonusEarned: false, yahtzeeEarned: false, bonusYahtzeeCount: 0, remainingScores: MAX_SCORES };
    }
	
    default:
	return { ...state };
    }
}
