import ActionTypes from './ActionTypes';
import request from 'superagent';

export function getHighScore() {
    return (dispatch) => {
	request
	    .get("/api/highScore")
	    .then(res => {
		return JSON.parse(res.text);
	    })
	    .then(score => {
		dispatch({
		    type: ActionTypes.HIGH_SCORE_RETRIEVED,
		    highScore: score
		    });
	    });
    };
};

export function updateHighScore(newHighScore) {
    return (dispatch) => {
	request
	    .post("/api/highScore")
	    .send(newHighScore)
	    .set('Accept', 'application/json')
	    .then(res => {
		return JSON.parse(res.text)
	    })
	    .then(score => {
		dispatch({
		    type: ActionTypes.HIGH_SCORE_RETRIEVED,
		    highScore: score
		});
	    });
    };
}


