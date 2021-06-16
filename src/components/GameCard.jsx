/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ScoreCard from './ScoreCard';
import DicePanel from './DicePanel';
import { connect } from 'react-redux';
import { rollDice, toggleDieKeeper } from '../actions/DiceActions';
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
	toggleDieKeeper: (die, newValue) => dispatch(toggleDieKeeper(die, newValue)),
	newGame: () => dispatch(newGame())
    };
};

const GameCard = (props) => {
    return (
	<div className='gameCard'>
            Yo dude.
	    <DicePanel dice={props.dice} rollDice={props.rollDice} toggleDieKeeper={props.toggleDieKeeper} newGame={props.newGame} />
	    <ScoreCard dice={props.dice.dice} scoreCard={props.scoreCard} />
	</div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);
