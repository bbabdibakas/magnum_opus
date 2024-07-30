const fs = require('fs');
const path = require('path');

const login = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8')
        const users = JSON.parse(data).users;

        const user = users.find(u => u.username === username);
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ id: user.id, username: user.username });
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    login,
};
