import { useEffect } from 'react';

const zeroPad = (num, places) => String(num).padStart(places, '0');

function formatDate(d) {
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();

    return year.toString() + "-" + zeroPad(month, 2) + "-" + zeroPad(date, 2);
}

const HighScore = (props) => {

    useEffect(() => {
	props.getHighScore();
    }, []);

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
