
import React, {Component} from 'react';
import { calculateScore } from '../actions/Scorers';

import './ScoreCardPanelRow.css';

export default class ScoreCardPanelRow extends Component {

    constructor(props) {
	super(props);
	
	this.state = {
	    score: null,
	    taken: false
	};
	
	this.handleButtonClick = this.handleButtonClick.bind(this);
	this.handleMouseOver = this.handleMouseOver.bind(this);
	this.handleMouseExit = this.handleMouseExit.bind(this);
    }

    handleButtonClick(event) {
	event.preventDefault();
	this.setState({...this.state, taken: true });
    }

    handleMouseOver(event) {
	if (!this.state.taken) {
	    this.setState({...this.state, score: calculateScore(this.props.dice, this.props.scoreType) });
	}
    }

    handleMouseExit(event) {
	if (!this.state.taken) {
	    this.setState({...this.state, score: null });
	}
    }
    
    render() {
	return (
	    <article className="scoreCardPanelRow">
		<button onClick={this.handleButtonClick} disabled={this.state.taken} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseExit}>{this.props.label}</button>
		<div class="scoreScore">{this.state.score}</div>
	    </article>
	);
    }
}
