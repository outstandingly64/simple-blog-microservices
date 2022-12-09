const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// every post cretaed will be stored in this object
const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    //blog post event
    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id: id, title
        }
    });

    // 201 indiciates we just CREATED a resource
    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    console.log('Event Received!', req.body.type);

    res.send({});
});

app.listen(4000, () => {
    console.log('Listening on 4000');
});

// will be storing these diff resources in memory, not in a database
// SO EVERYTIME WE START A SERVICE, WE WILL LOSE OUR DATA
// and that is fine, this is a porject to get our feet wet in microservices