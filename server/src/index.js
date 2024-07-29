const config = require('./config/config');
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json

app.use('/auth', authRoutes);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});