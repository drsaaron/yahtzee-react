
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

    var gameOver = props.scoreCard.remainingScores === 0;

    var canRoll = !gameOver && anotherRollAllowed;
    
    return (
	<div className="diePanel">
	    <div id="diceControlButtons">
		<button onClick={(event) => handleRollDice(event, props)} disabled={!canRoll}>{label}</button>
		<button onClick={(event) => clearKeepers(event, props)} disabled={gameOver}>Clear keepers</button>
		<button onClick={(event) => keepAll(event, props)} disabled={gameOver}>Keep all</button>
		<button onClick={(event) => handleNewGame(event, props)}>New game</button>
	    </div>
	    <div id="dice">
		{dice.map(v => <Die className="die" dice={dice} die={v} key={v.key} toggleDieKeeper={props.toggleDieKeeper} />)}
	    </div>
	</div>
    );
}

export default DicePanel;
