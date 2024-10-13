const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;
    events.push(event);
    axios.post('/posts-service/events', event).catch((err) => console.log(err));
    axios.post('/comments-service/events', event).catch((err) => console.log(err));
    axios.post('/query-service/events', event).catch((err) => console.log(err));
    axios.post('/moderation-service/events', event).catch((err) => console.log(err));

    res.send({ status: 'OK'});
});

app.get('/events', (req, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log('EVENT BUS: 4005');
});