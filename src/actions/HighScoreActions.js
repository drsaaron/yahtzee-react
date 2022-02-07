import ActionTypes from './ActionTypes';
import request from 'superagent';

var devHighScore = { highScore: 1, date: Date.now(), name: 'Scott' };
const environment = process.env.NODE_ENV;

export function getHighScore() {
    if (environment == "production") {
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
    } else {
	return (dispatch) => {
	    dispatch({
		type: ActionTypes.HIGH_SCORE_RETRIEVED,
		highScore: devHighScore
	    });
	};
    };
};

export function updateHighScore(newHighScore) {
    if (environment === "production") {
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
    } else {
	devHighScore = newHighScore;
	    
	return (dispatch) => {
	    dispatch({
		type: ActionTypes.HIGH_SCORE_RETRIEVED,
		highScore: devHighScore
	    });
	};
    };
}


