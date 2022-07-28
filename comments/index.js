const express = require('express');
const { randomBytes } = require('crypto');
const { json } = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
	const { id } = req.params;
	const comments = commentsByPostId[id] || [];

	res.send(comments).status(200);
});

app.post('/posts/:id/comments', async (req, res) => {
	const commentId = randomBytes(4).toString('hex');
	const { content } = req.body;
	const { id } = req.params;
	const comments = commentsByPostId[id] || [];

	comments.push({
		id: commentId,
		content,
	});

	await axios.post('http://localhost:4005/events', {
		type: 'commentCreated',
		data: {
			id: commentId,
			content,
			postId: id,
		},
	});

	res.status(201).send();
});

app.post('/events', (req, res) => {
	console.log('Received Event', req.body.type);
	res.send();
});

app.listen(4001, () => {
	console.log('Listening comments on 4001');
});
