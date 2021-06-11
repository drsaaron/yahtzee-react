
import React, {Component} from 'react';
import Die from './Die';

export default class DiePanel extends Component {

    constructor(props) {
	super(props);

	this.handleRollDice = this.handleRollDice.bind(this);
    }

    handleRollDice(event) {
	event.preventDefault();
	this.props.rollDice(this.props.dice.dice);
    }
    
    render() {
	
	var die = this.props.dice.dice;
	
	return (
	    <div id="diePanel">
		<button onClick={this.handleRollDice}>Roll</button>
		{die.map(v => <Die value={v} key={v.key} />)}
	    </div>
	);
    }
}
