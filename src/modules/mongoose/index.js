'use strict';

const conf = require('config');
const mongoose = require('mongoose');
const logger = require('modules/logger');

// use native promises
mongoose.Promise = global.Promise;

mongoose.connect(conf.mongoose.uri, conf.mongoose.options);

mongoose.connection.on('open', function () {
	logger.info(`connnected to the database`);
});

mongoose.connection.on('error', function (err) {
	logger.error(err);
});

mongoose.connection.on('disconnected', function () {
	logger.info(`Mongoose default connection to DB disconnected`);
});

module.exports = mongoose;