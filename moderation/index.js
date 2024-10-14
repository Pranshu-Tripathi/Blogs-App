const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const handleEvent = async (type, data) => {
    if(type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved';
        // await axios.post('http://event-bus:4005/events', {
        //     type: 'CommentModerated',
        //     data: {
        //         id: data.id,
        //         content: data.content,
        //         postId: data.postId,
        //         status
        //     }
        // }).catch((err)=> console.log(err));

        await axios.post('http://event-bus-srv:4005/events', {
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
    // try {
    //     const res = await axios.get('http://event-bus:4005/events').catch((err) => console.log(err));
    //     for (let event of res.data) {
    //         console.log('Processing event:', event.type);
    //         handleEvent(event.type, event.data);
    //     }
    // } catch (err) {
    //     console.error('Error fetching events from event-bus', err);
    // }
    try {
        const res = await axios.get('http://event-bus-srv:4005/events').catch((err) => console.log(err));
        for (let event of res.data) {
            console.log('Processing event:', event.type);
            handleEvent(event.type, event.data);
        }
    } catch (err) {
        console.error('Error fetching events from event-bus', err);
    }
});