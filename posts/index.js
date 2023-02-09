const express = require('express');
const { randomBytes } = require('crypto');
const { json } = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(json());
app.use(cors());

const posts = {};

app.get('/posts/all', (req, res) => {
	res.send(posts).status(200);
});

app.post('/posts/create', async (req, res) => {
	const id = randomBytes(4).toString('hex');
	const { title } = req.body;

	const post = {
		id,
		title,
	}

	posts[id] = post;

	await axios.post('http://event-bus-srv:4005/events', {
		type: 'PostCreated',
		data: post,
	});
	
	res.status(201)
	res.json(post).send();
});

app.post('/events', (req, res) => {
	console.log('Received Event', req.body.type);
	res.send();
});

app.listen(4000, () => {
	console.log('Listening posts on 4000');
});
