const messageHandler = require('../../src/socket/route/messageHandler');
const REQUEST_TYPES = require('../../src/socket/route/requestTypes');
const RESPONSE_TYPES = require('../../src/socket/route/responseTypes');

describe('messageHandler', function () {
    test('it should throw error - Unsupported message type', function () {
        const message = {type: 'UNSUPPORTED TYPE'};
        expect(() => messageHandler(message)).toThrowError(TypeError)
    });

    describe.skip('Calendar messages', function () {
        test('it should return message - CALENDAR_LIST', function () {
            const message = {type: REQUEST_TYPES.GET_CALENDARS};
            expect(messageHandler(message)).toHaveProperty('type', RESPONSE_TYPES.CALENDARS);
        });

        test('it should return message - CALENDAR_CREATED', function () {
            const message = {type: REQUEST_TYPES.CREATE_CALENDAR};
            expect(messageHandler(message)).toHaveProperty('type', RESPONSE_TYPES.CALENDAR_CREATED);
        });

        test('it should return message - CALENDAR_DELETED', function () {
            const message = {type: REQUEST_TYPES.DELETE_CALENDAR};
            expect(messageHandler(message)).toHaveProperty('type', RESPONSE_TYPES.CALENDAR_DELETED);
        });

        test('it should return message - CALENDAR_UPDATED', function () {
            const message = {type: REQUEST_TYPES.UPDATE_CALENDAR};
            expect(messageHandler(message)).toHaveProperty('type', RESPONSE_TYPES.CALENDAR_UPDATED);
        });

        test('it should return message - CALENDAR_SHARED', function () {
            const message = {type: REQUEST_TYPES.SHARE_CALENDAR};
            expect(messageHandler(message)).toHaveProperty('type', RESPONSE_TYPES.CALENDAR_SHARED);
        });
    });

    describe.skip('Event messages', function () {
        test('it should return message - EVENT_CREATED', function () {
            const message = {type: REQUEST_TYPES.CREATE_EVENT};
            expect(messageHandler(message)).toHaveProperty('type', RESPONSE_TYPES.EVENT_CREATED);
        });

        test('it should return message - EVENT_DELETED', function () {
            const message = {type: REQUEST_TYPES.DELETE_EVENT};
            expect(messageHandler(message)).toHaveProperty('type', RESPONSE_TYPES.EVENT_DELETED);
        });

        test('it should return message - EVENT_UPDATED', function () {
            const message = {type: REQUEST_TYPES.UPDATE_EVENT};
            expect(messageHandler(message)).toHaveProperty('type', RESPONSE_TYPES.EVENT_UPDATED);
        });

        test('it should return message - EVENT_SHARED', function () {
            const message = {type: REQUEST_TYPES.SHARE_EVENT};
            expect(messageHandler(message)).toHaveProperty('type', RESPONSE_TYPES.EVENT_SHARED);
        });
    });
});