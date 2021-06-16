
import React, {Component} from 'react';
import { calculateScore } from '../actions/Scorers';
import { takeScore, updatePossibleScore } from '../actions/ScoreActions';
import { connect } from 'react-redux';

import './ScoreCardPanelRow.css';

class ScoreCardPanelRow extends Component {

    constructor(props) {
	super(props);

	var scoreCard = this.props.scoreCard;

	this.handleButtonClick = this.handleButtonClick.bind(this);
	this.handleMouseOver = this.handleMouseOver.bind(this);
	this.handleMouseExit = this.handleMouseExit.bind(this);
    }
    
    getScoreState() {
	var index = this.props.scoreCard.scores.findIndex(s => s.type === this.props.scoreType);
	return this.props.scoreCard.scores[index];
    }
    
    handleButtonClick(event) {
	event.preventDefault();
	this.props.takeScore(this.props.scoreType, calculateScore(this.props.dice, this.props.scoreType), this.props.dice);
    }

    handleMouseOver(event) {
	var scoreState = this.getScoreState();
	if (!scoreState.taken) {
	    this.props.updatePossibleScore(this.props.scoreType, calculateScore(this.props.dice, this.props.scoreType));
	}
    }

    handleMouseExit(event) {
	var scoreState = this.getScoreState();
	if (!scoreState.taken) {
	    this.props.updatePossibleScore(this.props.scoreType, 0);
	}
    }
    
    render() {
	var scoreState = this.getScoreState();
	var displayScore = scoreState.taken ? scoreState.score : scoreState.possibleScore;
	
	return (
	    <article className="scoreCardPanelRow">
		<button onClick={this.handleButtonClick} disabled={scoreState.taken} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseExit}>{this.props.label}</button>
		<div className="scoreScore">{displayScore}</div>
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
	takeScore: (scoreType, score, dice) => dispatch(takeScore(scoreType, score, dice)),
	updatePossibleScore: (scoreType, score) => dispatch(updatePossibleScore(scoreType, score))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCardPanelRow);
