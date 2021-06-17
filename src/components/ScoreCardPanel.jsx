/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import ScoreCardPanelRow from './ScoreCardPanelRow';
import classNames from 'classnames';

import './ScoreCardPanel.css';

export default class ScoreCardPanel extends Component {

    getClassNames() {
	return classNames({
	    panelTotal: 1,
	    bonusEarned: this.props.includeBonus && this.props.scoreCard.bonusEarned,
	    bonusNotEarned: this.props.includeBonus && !this.props.scoreCard.bonusEarned
	});
    }
    
    render() {
	var rows = this.props.scores;
	    
        return (
	    <div className='scoreCardPanel'>
		{rows.map(s => <ScoreCardPanelRow key={s.key} label={s.label} scoreType={s.key} dice={this.props.dice} scoreCard={this.props.scoreCard} />)}
		<div className={this.getClassNames()}>Total: {this.props.total}</div>
	    </div>
        );
    }
}
