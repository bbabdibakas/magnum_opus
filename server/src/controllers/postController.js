const fs = require('fs');
const path = require('path');

const getPostById = async (req, res) => {
    const postId = req.params.id

    if (!postId) {
        return res.status(400).json({ error: 'Post ID is required' });
    }

    try {
        const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8')
        const posts = JSON.parse(data).posts;
        const profiles = JSON.parse(data).profiles;

        const post = posts.find(u => u.id === postId);
        if (!post) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const profile = profiles.find(u => u.id === post.profileId);
        if (!profile) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({id: post.id, content: post.content, profile: profile});
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getPostById,
};
