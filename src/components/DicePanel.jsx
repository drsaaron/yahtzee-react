
import React from 'react';
import Die from './Die';

import './DicePanel.css';

function  handleRollDice(event, props) {
    event.preventDefault();
    props.rollDice(props.dice.dice);
}

function handleNewGame(event, props) {
    event.preventDefault();
    props.newGame();
}

function clearKeepers(event, props) {
    event.preventDefault();
    props.clearKeepers(props.dice.dice);
}

function keepAll(event, props) {
    event.preventDefault();
    props.keepAll(props.dice.dice);
}

const DicePanel = (props) => {

    // on mount, roll the dice.
    React.useEffect(() => {
	props.rollDice(props.dice.dice);
    }, []);
    
    var dice = props.dice.dice;

    var rollCount = props.dice.rollCount;
    var anotherRollAllowed = rollCount < 3;
    var label = (anotherRollAllowed) ? "Roll " + rollCount : "Take score";
    
    return (
	<div className="diePanel">
	    <div id="diceControlButtons">
		<button onClick={(event) => handleRollDice(event, props)} disabled={!anotherRollAllowed}>{label}</button>
		<button onClick={(event) => clearKeepers(event, props)}>Clear keepers</button>
		<button onClick={(event) => keepAll(event, props)}>Keep all</button>
		<button onClick={(event) => handleNewGame(event, props)}>New game</button>
	    </div>
	    <div id="dice">
		{dice.map(v => <Die className="die" die={v} key={v.key} toggleDieKeeper={props.toggleDieKeeper} />)}
	    </div>
	</div>
    );
}

export default DicePanel;
