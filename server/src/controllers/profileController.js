const fs = require('fs');
const path = require('path');

const getProfileById = async (req, res) => {
    const profileId = req.params.id

    if (!profileId) {
        return res.status(400).json({ error: 'Profile ID is required' });
    }

    try {
        const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8')
        const profiles = JSON.parse(data).profiles;

        const profile = profiles.find(u => u.id === profileId);
        if (!profile) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json(profile);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getProfileById,
};
