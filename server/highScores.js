const { MongoClient } = require('mongodb');
const config = require('config');

const SCORE_DB_URL = process.env.SCORE_DB_URL || config.get('SCORE_DB_URL');
const SCORE_DB_NAME = config.get('SCORE_DB_NAME');
console.log("got db name " + SCORE_DB_NAME);

const client = new MongoClient(SCORE_DB_URL);
client.connect();

const defaultHighScore = { name: 'Scott', highScore: 0, date: Date.now() };

function getCollection(client) {
    const database = client.db(SCORE_DB_NAME);
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
