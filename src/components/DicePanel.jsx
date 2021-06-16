
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

const DiePanel = (props) => {

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
	    <button onClick={(event) => handleRollDice(event, props)} disabled={!anotherRollAllowed}>{label}</button>
	    <button onClick={(event) => handleNewGame(event, props)}>New game</button>
	    {dice.map(v => <Die className="die" die={v} key={v.key} toggleDieKeeper={props.toggleDieKeeper} />)}
	</div>
    );
}

export default DiePanel;
