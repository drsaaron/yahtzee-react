/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import ScoreCardPanelRow from './ScoreCardPanelRow';

import './ScoreCardPanel.css';

export default class ScoreCardPanel extends Component {

    render() {
	var rows = this.props.scores;
	    
        return (
	    <div className='scoreCardPanel'>
		{rows.map(s => <ScoreCardPanelRow key={s.key} label={s.label} scoreType={s.key} dice={this.props.dice} scoreCard={this.props.scoreCard} />)}
	    </div>
        );
    }
}
