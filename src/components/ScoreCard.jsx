
import React, {Component} from 'react';
import ScoreCardPanel from './ScoreCardPanel';

import './ScoreCard.css'

export default class ScoreCard extends Component {

    render() {
	var upperPanelScores = [
	    { key: 1, label: 'Aces' },
	    { key: 2, label: 'Twos' },
	    { key: 3, label: 'Threes' },
	    { key: 4, label: 'Fours' },
	    { key: 5, label: 'Fives' },
	    { key: 6, label: 'Sixes' }
	];

	var lowerPanelScores = [
	    { key: 1, label: '3 of a kind' },
	    { key: 2, label: '4 of a kind' },
	    { key: 3, label: 'Full house' },
	    { key: 4, label: 'Small straight' },
	    { key: 5, label: 'Large straight' },
	    { key: 6, label: 'Yahtzee' },
	    { key: 7, label: 'Chance' }
	];
	
	return (
	    <div className="scoreCard">
		<ScoreCardPanel id='upperScoreCard' scores={upperPanelScores} />
		<ScoreCardPanel id='lowerScoreCard' scores={lowerPanelScores} />
	    </div>
	);
    }
}
