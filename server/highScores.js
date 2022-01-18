
var highScore = { name: 'Scott', highScore: 250, date: '2022-01-18' };

function getHighScore() {
    return highScore;
}

function updateHighScore(newHighScore) {
    highScore = newHighScore;
}

exports.getHighScore = getHighScore;
exports.updateHighScore = updateHighScore;
