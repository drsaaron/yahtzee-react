
import React, {Component} from 'react';
import { calculateScore } from '../actions/Scorers';
import { takeScore, updatePossibleScore } from '../actions/ScoreActions';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './ScoreCardPanelRow.css';

class ScoreCardPanelRow extends Component {

    constructor(props) {
	super(props);

	this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    
    getScoreState() {
	var index = this.props.scoreCard.scores.findIndex(s => s.type === this.props.scoreType);
	return this.props.scoreCard.scores[index];
    }
    
    handleButtonClick(event) {
	event.preventDefault();
	this.props.takeScore(this.props.scoreType, calculateScore(this.props.dice, this.props.scoreType), this.props.dice, this.props.scoreCard);
    }

    getClassNames(scoreState) {
	return classNames({
	    scoreScore: true,
	    scoreTaken: scoreState.taken,
	    scorePossible: !scoreState.taken,
	    vcentered: this.props.label.length > 12 // this class only works for multi-line labeled rows
	});
    }

    render() {
	var scoreState = this.getScoreState();
	var displayScore = scoreState.taken ? scoreState.score : scoreState.possibleScore;
	
	return (
	    <article className="scoreCardPanelRow">
		<button onClick={this.handleButtonClick} disabled={scoreState.taken}>{this.props.label}</button>
		<div className={this.getClassNames(scoreState)}>{displayScore}</div>
	    </article>
	);
    }
}

const mapStateToProps = (state) => {
    return {
	scoreCard: state.scoreCard
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
	takeScore: (scoreType, score, dice, scoreCard) => dispatch(takeScore(scoreType, score, dice, scoreCard)),
	updatePossibleScore: (scoreType, score) => dispatch(updatePossibleScore(scoreType, score))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCardPanelRow);
