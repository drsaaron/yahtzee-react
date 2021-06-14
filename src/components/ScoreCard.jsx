
import React, {Component} from 'react';
import ScoreCardPanel from './ScoreCardPanel';
import { acesScorer, twosScorer, threesScorer, foursScorer, fivesScorer, sixesScorer, chanceScorer, threeOfAKindScorer, fourOfAKindScorer, yahtzeeScorer, smallStraightScorer, largeStraightScorer, fullHouseScorer } from '../actions/Scorers';

import './ScoreCard.css'

export default class ScoreCard extends Component {

    render() {
	var upperPanelScores = [
	    { key: 1, label: 'Aces', scorer: acesScorer },
	    { key: 2, label: 'Twos', scorer: twosScorer },
	    { key: 3, label: 'Threes', scorer: threesScorer },
	    { key: 4, label: 'Fours', scorer: foursScorer },
	    { key: 5, label: 'Fives', scorer: fivesScorer },
	    { key: 6, label: 'Sixes', scorer: sixesScorer }
	];

	var lowerPanelScores = [
	    { key: 1, label: '3 of a kind', scorer: threeOfAKindScorer },
	    { key: 2, label: '4 of a kind', scorer: fourOfAKindScorer },
	    { key: 3, label: 'Full house', scorer: fullHouseScorer },
	    { key: 4, label: 'Small straight', scorer: smallStraightScorer },
	    { key: 5, label: 'Large straight', scorer: largeStraightScorer },
	    { key: 6, label: 'Yahtzee', scorer: yahtzeeScorer },
	    { key: 7, label: 'Chance', scorer: chanceScorer }
	];
	
	return (
	    <div className="scoreCard">
		<ScoreCardPanel id='upperScoreCard' scores={upperPanelScores} dice={this.props.dice} />
		<ScoreCardPanel id='lowerScoreCard' scores={lowerPanelScores} dice={this.props.dice} />
	    </div>
	);
    }
}
