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

app.post('/posts', async (req, res) => {
	const id = randomBytes(4).toString('hex');
	const { title } = req.body;

	posts[id] = {
		id,
		title,
	};

	await axios.post('http://localhost:4005/events', {
		type: 'PostCreated',
		data: {
			id,
			title,
		},
	});

	res.send().status(201);
});

app.post('/events', (req, res) => {
	console.log('Received Event', req.body.type);
	res.send();
});

app.listen(4000, () => {
	console.log('Listening posts on 4000');
});
