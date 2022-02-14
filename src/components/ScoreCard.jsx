
import React, {Component} from 'react';
import ScoreCardPanel from './ScoreCardPanel';
import ScoreTypes from '../actions/ScoreTypes';
import classNames from 'classnames';
import HighScore from './HighScore';

import './ScoreCard.css'

const upperPanelScores = [
    { key: ScoreTypes.ACES, label: 'Aces' },
    { key: ScoreTypes.TWOS, label: 'Twos' },
    { key: ScoreTypes.THREES, label: 'Threes' },
    { key: ScoreTypes.FOURS, label: 'Fours' },
    { key: ScoreTypes.FIVES, label: 'Fives' },
    { key: ScoreTypes.SIXES, label: 'Sixes' }
];

const lowerPanelScores = [
    { key: ScoreTypes.THREE_OF_A_KIND, label: '3 of a kind' },
    { key: ScoreTypes.FOUR_OF_A_KIND, label: '4 of a kind' },
    { key: ScoreTypes.FULL_HOUSE, label: 'Full house' },
    { key: ScoreTypes.SMALL_STRAIGHT, label: 'Small straight' },
    { key: ScoreTypes.LARGE_STRAIGHT, label: 'Large straight' },
    { key: ScoreTypes.YAHTZEE, label: 'Yahtzee' },
    { key: ScoreTypes.CHANCE, label: 'Chance' }
];

function getBonusYahtzeeClassNames(props) {
    return classNames({
	visible: props.scoreCard.yahtzeeEarned,
	hidden: !props.scoreCard.yahtzeeEarned
    });
}

const ScoreCard = (props) => {
    return (
	<div className="scoreCard">
	    <ScoreCardPanel id='upperScoreCard' scores={upperPanelScores} dice={props.dice} scoreCard={props.scoreCard} total={props.scoreCard.upperPanelTotal} includeBonus={true} />
	    <ScoreCardPanel id='lowerScoreCard' scores={lowerPanelScores} dice={props.dice} scoreCard={props.scoreCard} total={props.scoreCard.lowerPanelTotal} includeBonus={false} />
	    <div id="bonusYahtzee" className={getBonusYahtzeeClassNames(props)}>Bonus yahtzees: {props.scoreCard.bonusYahtzeeCount}</div>
	    <div id="totalScore">Game total: {props.scoreCard.total}</div>
	    <HighScore highScore={props.highScore} getHighScore={props.getHighScore} />
	</div>
    );
}

export default ScoreCard;
