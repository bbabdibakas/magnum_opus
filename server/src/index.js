const config = require('./config/config');
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const postRouter = require('./routes/postRoutes');

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json

app.use((req, res, next) => {
    setTimeout(() => {
        next();
    }, 800)
});

app.use('/auth', authRoutes);

app.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'Not authorized' });
    } 
    next()
});

app.use('/profiles', profileRoutes);
app.use('/posts', postRouter);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});