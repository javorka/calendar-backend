// @flow

const debug = require('debug')('message-handler');
const TYPES = require('./requestTypes');

module.exports = function messageHandler(message: Message): Response {
    debug(`Processing message ${message.type}`);
    switch (message.type) {
        case TYPES.CREATE_CALENDAR:
            return { message: 'Calendar created' };
        case TYPES.DELETE_CALENDAR:
            return { message: 'Calendar deleted' };
        default:
            throw new TypeError(`Unsupported message type ${message.type}`)
    }

};