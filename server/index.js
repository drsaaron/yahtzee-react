const path = require('path');
const express = require('express');
const config = require('config');
const fs = require('fs');
const http = require('http');
const { getHighScore, updateHighScore } = require('./highScores');
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(path.resolve(__dirname, '../build')));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var httpServer = http.createServer(app);

app.get('/api/highScore', (req, res) => {
    getHighScore()
	.then(hs => {
	    return res.json(hs);
	});
});

app.post('/api/highScore', (req, res) => {
    var newHighScore = req.body;
    updateHighScore(newHighScore);
    return res.json(getHighScore());
});
	
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

const PORT = config.get('PORT');
httpServer.listen(PORT, () => { console.log(`Application server listening on port ${PORT} (http)`); });