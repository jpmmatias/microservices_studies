const express = require('express');
const { json } = require('express');
const cors = require('cors');
const axios = require('axios');

const events = [];

const app = express();
app.use(json());
app.use(cors());

app.post('/events', (req, res) => {
	const event = req.body;

	events.push(event);

	axios.post('http://localhost:4000/events', event);
	axios.post('http://localhost:4001/events', event);
	axios.post('http://localhost:4002/events', event);
	axios.post('http://localhost:4003/events', event);

	res.status(200).send();
});

app.get('/events', (req, res) => {
	res.status(200).send(events);
});

app.listen(4005, () => {
	console.log('Listening on 4005');
});
