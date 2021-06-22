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

import './GameCard.css';

const mapStateToProps = (state) => {
    return {
	dice: state.dice,
	scoreCard: state.scoreCard
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
	rollDice: (dice) => dispatch(rollDice(dice)),
	toggleDieKeeper: (dice, die, newValue) => dispatch(toggleDieKeeper(dice, die, newValue)),
	clearKeepers: (dice) => dispatch(clearKeepers(dice)),
	keepAll: (dice) => dispatch(keepAll(dice)),
	newGame: () => dispatch(newGame())
    };
};

const GameCard = (props) => {
    return (
	<div className='gameCard'>
            Yo dude.
	    <DicePanel dice={props.dice} rollDice={props.rollDice} toggleDieKeeper={props.toggleDieKeeper} clearKeepers={props.clearKeepers} keepAll={props.keepAll} newGame={props.newGame} scoreCard={props.scoreCard} />
	    <ScoreCard dice={props.dice.dice} scoreCard={props.scoreCard} />
	</div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);
