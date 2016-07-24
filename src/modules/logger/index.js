'use strict';

const conf = require('config');
const winston = require('winston');

const logger = new winston.Logger({
	transports: [
		new winston.transports.Console({ level: conf.logger.level })
	]
});

module.exports = logger;