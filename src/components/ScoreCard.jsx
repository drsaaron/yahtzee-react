
import React, {Component} from 'react';
import ScoreCardPanel from './ScoreCardPanel';

export default class ScoreCard extends Component {

    constructor(props) {
	super(props);
    }

    render() {
	return (
	    <div className="scoreCard">
		<ScoreCardPanel id='upperScoreCard' />
		<ScoreCardPanel id='lowerScoreCard' />
	    </div>
	);
    }
}
