/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ScoreCardPanelRow from './ScoreCardPanelRow';
import classNames from 'classnames';

import './ScoreCardPanel.css';

const ScoreCardPanel = (props) => {

    const getClassNames = () => {
	return classNames({
	    panelTotal: 1,
	    bonusEarned: props.includeBonus && props.scoreCard.bonusEarned,
	    bonusNotEarned: props.includeBonus && !props.scoreCard.bonusEarned
	});
    }
    
    var rows = props.scores;
	    
    return (
	<div className='scoreCardPanel'>
	    {rows.map(s => <ScoreCardPanelRow key={s.key} label={s.label} scoreType={s.key} dice={props.dice} scoreCard={props.scoreCard} />)}
	    <div className={getClassNames()}>Total: {props.total}</div>
	</div>
    );
}

export default ScoreCardPanel;
