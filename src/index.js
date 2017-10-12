// @flow
const express = require('express');
const http = require('http');
const debug = require('debug')('main');
const session = require('express-session');
const path = require('path');

const createWebSocketServer = require('./socket/webSocketServerFactory');
const PORT = require('./config/config').port;

const app = express();

const sessionParser = session({
    saveUninitialized: false,
    secret: 'eCuRiTy',
    resave: false
});

//middleware
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(sessionParser);

//login
app.post('/login', (req, res) => {
   const id = '555';
   debug(`Updating session for user ${id}`);
   req.session.userId = id;
   res.send({ result: 'OK', message: 'Session updated' });
});

//logout
app.delete('/logout', (req, res) => {
   debug(`Destroying session for user ${req.session.userId}`);
   req.session.destroy();
   res.send({ result: 'OK', message: 'Session destroyed' });
});

const server = http.createServer(app);
createWebSocketServer(server, sessionParser);

server.listen(PORT, function () {
    debug(`Server is listening on port ${PORT}`)
});