const WebSocket = require('ws');
const debug = require('debug')('websocket-server');
const messageHandler = require('./route/requestTypes');

module.exports = function WebSocketServerFactory(server, sessionParser) {
    const wss = new WebSocket.Server({
        verifyClient: (info, done) => {
            debug('Parsing session from request');
            sessionParser(info.req, {}, () => {
                debug('Session is parsed');
                done(info.req.session.userId);
            });
        },
        server
    });

    wss.on('connection', function onConnect(ws, req) {
        ws.on('message', function onNewMessage(message) {
            debug(`Received new message from ${req.session.userId}`);
            const response = messageHandler(message);
            ws.send(response);
        });
    });
};