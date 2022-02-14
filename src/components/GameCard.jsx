/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ScoreCard from './ScoreCard';
import DicePanel from './DicePanel';
import { connect } from 'react-redux';
import { rollDice, toggleDieKeeper, clearKeepers, keepAll } from '../actions/DiceActions';
import { newGame } from '../actions/GameActions';
import { getHighScore } from '../actions/HighScoreActions';

import './GameCard.css';

const {version} = require("../../package.json");

const mapStateToProps = (state) => {
    return {
	dice: state.dice,
	scoreCard: state.scoreCard,
	highScore: state.highScore
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
	rollDice: (dice) => dispatch(rollDice(dice)),
	toggleDieKeeper: (dice, die, newValue) => dispatch(toggleDieKeeper(dice, die, newValue)),
	clearKeepers: (dice) => dispatch(clearKeepers(dice)),
	keepAll: (dice) => dispatch(keepAll(dice)),
	newGame: () => dispatch(newGame()),
	getHighScore: () => dispatch(getHighScore())
    };
};

const GameCard = (props) => {
    return (
	<div className='gameCard'>
            Welcome to Yahtzee version {version}
	    <DicePanel dice={props.dice} rollDice={props.rollDice} toggleDieKeeper={props.toggleDieKeeper} clearKeepers={props.clearKeepers} keepAll={props.keepAll} newGame={props.newGame} scoreCard={props.scoreCard} />
	    <ScoreCard dice={props.dice.dice} scoreCard={props.scoreCard} highScore={props.highScore} getHighScore={props.getHighScore} />
	</div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);
