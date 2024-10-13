const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const handleEvent = async (type, data) => {
    if(type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved';
        await axios.post('/event-bus/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                content: data.content,
                postId: data.postId,
                status
            }
        }).catch((err)=> console.log(err));
    }
}

app.post('/events', async (req, res) => {
    const { type, data } = req.body;
    handleEvent(type, data);
    res.send({});
});

app.listen(4003, async () => {
    console.log('COMMENT MODERATION SERVICE: Listening on 4003');

    const res = await axios.get('/event-bus/events').catch((err) => console.log(err));
    for (let event of res.data) {
        console.log('Processing event:', event.type);
        handleEvent(event.type, event.data);
    }
});