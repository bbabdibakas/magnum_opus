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

        res.status(200).json({ id: post.id, content: post.content, profile: profile });
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createPost = async (req, res) => {
    const { content, profileId } = req.body

    if (!content || !profileId) {
        return res.status(400).json({ error: 'Content or Profile ID is required' });
    }

    try {
        const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8');
        const db = JSON.parse(data);

        const profiles = db.profiles;
        const posts = db.posts

        const profile = profiles.find(u => u.id === profileId);
        if (!profile) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const newPost = {
            id: Math.random().toString(36).substring(2, 15),
            content: content,
            profileId: profileId,
        };

        posts.push(newPost)
        db.posts = posts;

        fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db, null, 2));

        res.status(201).json(newPost);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getPostById,
    createPost
};
