import ActionTypes from './ActionTypes';
import axios from 'axios';

const request = axios.create();
export function getHighScore() {
    return (dispatch) => {
	request
	    .get("/api/highScore")
	    .then(res => {
		return res.data;
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
	    .post("/api/highScore", newHighScore)
	    .then(res => {
		return res.data
	    })
	    .then(score => {
		dispatch({
		    type: ActionTypes.HIGH_SCORE_RETRIEVED,
		    highScore: score
		});
	    });
    };
}


