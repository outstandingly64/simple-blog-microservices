const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// the moderation service only watches for 'CommentCreated' events
// and will only emit 'CommentModerated' events

app.post('/events', (req, res)=>{

});

app.listen(4003, ()=>{
    console.log('listening on 4003');
});