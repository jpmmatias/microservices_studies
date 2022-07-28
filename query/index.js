const express = require('express');
const { json } = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
	if (type === 'PostCreated') {
		const { id, title } = data;

		posts[id] = { id, title, comments: [] };
	}

	if (type === 'commentCreated') {
		const { id, content, postId, status } = data;

		const post = posts[postId];
		post.comments.push({ id, content, status });
		console.log(post);
	}
	if (type === 'CommentUpdated') {
		const { postId, id } = data;

		posts[postId].comments = posts[postId].comments.map((comment) => {
			if (comment.id === id) return data;

			return comment;
		});
	}
};

app.get('/posts', (req, res) => {
	res.send(posts).status(200);
});

app.post('/events', async (req, res) => {
	const { type, data } = req.body;
	handleEvent(type, data);

	res.status(201).send();
});

app.listen(4002, async () => {
	console.log('Listening comments on 4002');

	const res = await axios.get('http://localhost:4005/events');

	for (const event of res.data) {
		console.log('Processing event', event.type);

		handleEvent(event.type, event.data);
	}
});
