
import React, {Component} from 'react';
import Die from './Die';

import './DicePanel.css';

export default class DiePanel extends Component {

    constructor(props) {
	super(props);

	this.handleRollDice = this.handleRollDice.bind(this);
	this.handleNewGame = this.handleNewGame.bind(this);
    }

    handleRollDice(event) {
	event.preventDefault();
	this.props.rollDice(this.props.dice.dice);
    }

    handleNewGame(event) {
	event.preventDefault();
	this.props.newGame();
    }
    
    render() {
	
	var dice = this.props.dice.dice;
	
	return (
	    <div className="diePanel">
		<button onClick={this.handleRollDice}>Roll</button>
		<button onClick={this.handleNewGame}>New game</button>
		{dice.map(v => <Die className="die" die={v} key={v.key} toggleDieKeeper={this.props.toggleDieKeeper} />)}
	    </div>
	);
    }
}
