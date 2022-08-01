
import { calculateScore } from '../actions/Scorers';
import { takeScore, updatePossibleScore } from '../actions/ScoreActions';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './ScoreCardPanelRow.css';

const ScoreCardPanelRow = (props) => {

    const getScoreState = () => {
	var index = props.scoreCard.scores.findIndex(s => s.type === props.scoreType);
	return props.scoreCard.scores[index];
    }
    
    const handleButtonClick = (event) => {
	event.preventDefault();
	props.takeScore(props.scoreType, calculateScore(props.dice, props.scoreType), props.dice, props.scoreCard);
    }

    const getClassNames = (scoreState) => {
	return classNames({
	    scoreScore: true,
	    scoreTaken: scoreState.taken,
	    scorePossible: !scoreState.taken,
	    vcentered: props.label.length > 12 // this class only works for multi-line labeled rows
	});
    }

    var scoreState = getScoreState();
    var displayScore = scoreState.taken ? scoreState.score : scoreState.possibleScore;
	
    return (
	<article className="scoreCardPanelRow">
	    <button onClick={handleButtonClick} disabled={scoreState.taken}>{props.label}</button>
	    <div className={getClassNames(scoreState)}>{displayScore}</div>
	</article>
    );
}

const mapStateToProps = (state) => {
    return {
	scoreCard: state.scoreCard
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
	takeScore: (scoreType, score, dice, scoreCard) => dispatch(takeScore(scoreType, score, dice, scoreCard)),
	updatePossibleScore: (scoreType, score) => dispatch(updatePossibleScore(scoreType, score))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCardPanelRow);
