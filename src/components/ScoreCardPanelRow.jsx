
import React, {Component} from 'react';
import { calculateScore } from '../actions/Scorers';
import { takeScore } from '../actions/ScoreActions';
import { connect } from 'react-redux';

import './ScoreCardPanelRow.css';

class ScoreCardPanelRow extends Component {

    constructor(props) {
	super(props);

	var scoreCard = this.props.scoreCard;
	var index = scoreCard.scores.findIndex(s => s.type === this.props.scoreType);
	console.log("index = " + index);
	this.state = {
	    initialScore: scoreCard.scores[index].score,
	    score: scoreCard.scores[index].score,
	};
	
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
	this.props.takeScore(this.props.scoreType, calculateScore(this.props.dice, this.props.scoreType));
    }

    handleMouseOver(event) {
	var scoreState = this.getScoreState();
	if (!scoreState.taken) {
	    this.setState({...this.state, score: calculateScore(this.props.dice, this.props.scoreType) });
	}
    }

    handleMouseExit(event) {
	var scoreState = this.getScoreState();
	if (!scoreState.taken) {
	    this.setState({...this.state, score: this.state.initialScore });
	}
    }
    
    render() {
	var scoreState = this.getScoreState();
	return (
	    <article className="scoreCardPanelRow">
		<button onClick={this.handleButtonClick} disabled={scoreState.taken} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseExit}>{this.props.label}</button>
		<div className="scoreScore">{this.state.score}</div>
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
	takeScore: (scoreType, score) => dispatch(takeScore(scoreType, score))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCardPanelRow);
