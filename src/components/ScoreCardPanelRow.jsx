
import React, {Component} from 'react';

import './ScoreCardPanelRow.css';

export default class ScoreCardPanelRow extends Component {

    constructor(props) {
	super(props);
	
	this.state = {
	    score: 0
	};
	
	this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {
	event.preventDefault();
    }
    
    render() {
	return (
	    <article className="scoreCardPanelRow">
		<button onClick={this.handleButtonClick}>{this.props.label}</button>
		<div class="scoreScore">{this.state.score}</div>
	    </article>
	);
    }
}
