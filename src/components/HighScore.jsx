import { useEffect } from 'react';
import { getHighScore } from '../actions/HighScoreActions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
	highScore: state.highScore
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
	getHighScore: () => dispatch(getHighScore())
    }
};

const HighScore = (props) => {

    useEffect(() => {
	props.getHighScore();
    }, []);

    var scoreDate = props.highScore.date;
    var scoreDateTxt = '';
    if (scoreDate > 0) {
	scoreDateTxt = (new Date(scoreDate)).toISOString().split('T')[0];
    }

    return (
	<div id="highScore">
	    High Score: {props.highScore.highScore} ({props.highScore.name} on {scoreDateTxt} )
	</div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(HighScore);
