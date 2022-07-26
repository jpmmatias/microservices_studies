const express = require('express');
const { randomBytes } = require('crypto');
const { json } = require('express');

const app = express();
app.use(json());

const posts = {
	1: { id: 1, title: 'title 1' },
	2: { id: 2, title: 'title 2' },
};

app.get('/posts', (req, res) => {
	res.send(posts).status(200);
});

app.post('/posts', (req, res) => {
	const id = randomBytes(4).toString('hex');
	const { title } = req.body;

	posts[id] = {
		id,
		title,
	};

	res.send().status(201);
});

app.listen(4000, () => {
	console.log('Listening posts on 4000');
});
