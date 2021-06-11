/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import ScoreCard from './ScoreCard';
import DicePanel from './DicePanel';
import store from '../store/YahtzeeStore';
import { connect } from 'react-redux';
import { rollDice } from '../actions/DiceActions';

const mapStateToProps = (state) => {
    return {
	dice: state.dice
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
	rollDice: (dice) => dispatch(rollDice(dice))
    };
};

class GameCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
	    <div className='gameCard'>
                Yo dude.
		<DicePanel dice={this.props.dice} rollDice={this.props.rollDice} />
		<ScoreCard />
	    </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);
