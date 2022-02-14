import { format } from 'date-fns';

function formatDate(d) {
    return format(d, 'yyyy-MM-dd');
}

const HighScore = (props) => {

    var scoreDate = props.highScore.date;
    var scoreDateTxt = '';
    if (scoreDate > 0) {
	scoreDateTxt = formatDate((new Date(scoreDate)));
    }

    return (
	<div id="highScore">
	    High Score: {props.highScore.highScore} ({props.highScore.name} on {scoreDateTxt})
	</div>
    );
};

export default HighScore;
