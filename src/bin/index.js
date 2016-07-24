'use strict';

const conf = require('config');
const logger = require('modules/logger');

const app = require('modules/app');
const connectDB = require('modules/mongoose');

const server = app.listen(conf.get('port'), (err) => {
	if(err) {
		throw err;
	}
	logger.info(`Server is running on port ${conf.port}`); 
});

module.exports = server;