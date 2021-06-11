/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import ScoreCard from './ScoreCard';
import DicePanel from './DicePanel';
import { connect } from 'react-redux';
import { rollDice, toggleDieKeeper } from '../actions/DiceActions';

import './GameCard.css';

const mapStateToProps = (state) => {
    return {
	dice: state.dice
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
	rollDice: (dice) => dispatch(rollDice(dice)),
	toggleDieKeeper: (die, newValue) => dispatch(toggleDieKeeper(die, newValue))
    };
};

class GameCard extends Component {

    render() {
        return (
	    <div className='gameCard'>
                Yo dude.
		<DicePanel dice={this.props.dice} rollDice={this.props.rollDice} toggleDieKeeper={this.props.toggleDieKeeper} />
		<ScoreCard />
	    </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);
