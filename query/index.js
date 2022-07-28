const express = require('express');
const { randomBytes } = require('crypto');
const { json } = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
	res.send(posts).status(200);
});

app.post('/events', async (req, res) => {
	const { type, data } = req.body;
	if (type === 'PostCreated') {
		const { id, title } = data;

		posts[id] = { id, title, comments: [] };
	}

	if (type === 'commentCreated') {
		const { id, content, postId } = data;

		const post = posts[postId];
		console.log(post);
		post.comments.push({ id, content });
		console.log(post);
	}
	console.log(posts);
	res.status(201).send();
});

app.listen(4002, () => {
	console.log('Listening comments on 4002');
});
