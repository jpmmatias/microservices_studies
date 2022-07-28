const express = require('express');
const { randomBytes } = require('crypto');
const { json } = require('express');
const cors = require('cors');

const app = express();
app.use(json());
app.use(cors());

const commentsByPostId = {
	1: [
		{ id: 1, content: 'text 1' },
		{ id: 3, content: 'text 3' },
	],
	2: [{ id: 2, content: 'text 2' }],
	'89b49597': [{ id: 2, content: 'text 2' }],
};

app.get('/posts/:id/comments', (req, res) => {
	const { id } = req.params;
	const comments = commentsByPostId[id] || [];

	res.send(comments).status(200);
});

app.post('/posts/:id/comments', (req, res) => {
	const commentId = randomBytes(4).toString('hex');
	const { content } = req.body;
	const { id } = req.params;
	const comments = commentsByPostId[id] || [];

	comments.push({
		id: commentId,
		content,
	});
	res.status(201).send();
});

app.listen(4001, () => {
	console.log('Listening comments on 4001');
});
