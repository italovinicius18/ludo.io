const express = require('express');
const socket = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socket(server);

io.on('connection', (socket) => {
    console.log('We have a new connection !');

    socket.on('disconnected', () => {
        console.log('User had left !');
    });
});



app.use(router);

server.listen(PORT, ()=> {console.log('Server has started on port: ' + PORT)})
