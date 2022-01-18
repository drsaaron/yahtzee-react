const { MongoClient } = require('mongodb');
const config = require('config');

var SCORE_DB_URL = config.get('SCORE_DB_URL');

// fix up the ID and password.  Ick.
if (process.env.NODE_ENV == "production") {
    var user = process.env.MONGO_DB_USER;
    var pass = process.env.MONGO_DB_PASS;
    SCORE_DB_URL = SCORE_DB_URL.replace("__USER__", user).replace("__PASS__", pass);
}

const client = new MongoClient(SCORE_DB_URL);
client.connect();

const defaultHighScore = { name: 'Scott', highScore: 0, date: Date.now() };

function getCollection(client) {
    const database = client.db('yahtzee');
    const highScoresCollection = database.collection('high_scores');
    return highScoresCollection;
}

async function getHighScore_work() {
    try {
	const highScoresCollection = getCollection(client);

	// read the list, sorting by date so the most recent can be the first in the list
	var highScoreList = await highScoresCollection.find().sort({date: -1}).toArray();
	if (highScoreList.length == 0) {
	    highScoreList = [defaultHighScore];
	    const result = await highScoresCollection.insertOne(defaultHighScore);
	}
	
	highScore = highScoreList[0];
	return highScore;
    } finally {
	//	await client.close();
    }
}

function getHighScore() {
    return new Promise((resolve, reject) => {
	resolve(getHighScore_work());
    });
};

async function updateHighScore_work(newHighScore) {
    // set the date explicitly here to ensure all works as expected.
    newHighScore.date = Date.now();
    
    try {
	const highScoresCollection = getCollection(client);

	// simply insert.  the get will sort and get the latest.
	const result = await highScoresCollection.insertOne(newHighScore);
	return result;
    } finally {
	//await client.close();
    }
}

function updateHighScore(newHighScore) {
    return new Promise((resolve, reject) => {
	resolve(updateHighScore_work(newHighScore));
    });
}

exports.getHighScore = getHighScore;
exports.updateHighScore = updateHighScore;
