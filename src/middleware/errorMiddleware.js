const debug = require('debug')('error');

const INTERNAL_SERVER_ERROR = 500;
const ERROR_MSG = 'We encounter an unexpected error. Please contact administrator';

module.exports = function errorMiddleware(err, req, res) {
    debug(err.stack);
    res.status(INTERNAL_SERVER_ERROR).send(ERROR_MSG)
};