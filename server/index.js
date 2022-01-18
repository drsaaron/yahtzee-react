const path = require('path');
const express = require('express');
const config = require('config');
const fs = require('fs');
const http = require('http');

const app = express();
app.use(express.static(path.resolve(__dirname, '../build')));

var httpServer = http.createServer(app);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

const PORT = config.get('PORT');
httpServer.listen(PORT, () => { console.log(`Application server listening on port ${PORT} (http)`); });
