const config = require('./config/config');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});