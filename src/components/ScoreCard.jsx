
import React, {Component} from 'react';
import ScoreCardPanel from './ScoreCardPanel';
import ScoreTypes from '../actions/ScoreTypes';

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

const ScoreCard = (props) => {
    return (
	<div className="scoreCard">
	    <ScoreCardPanel id='upperScoreCard' scores={upperPanelScores} dice={props.dice} scoreCard={props.scoreCard} total={props.scoreCard.upperPanelTotal} />
	    <ScoreCardPanel id='lowerScoreCard' scores={lowerPanelScores} dice={props.dice} scoreCard={props.scoreCard} total={props.scoreCard.lowerPanelTotal} />
	</div>
    );
}

export default ScoreCard;
