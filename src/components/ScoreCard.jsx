
import React, {Component} from 'react';
import ScoreCardPanel from './ScoreCardPanel';

export default class ScoreCard extends Component {

    render() {
	return (
	    <div className="scoreCard">
		<ScoreCardPanel id='upperScoreCard' />
		<ScoreCardPanel id='lowerScoreCard' />
	    </div>
	);
    }
}
