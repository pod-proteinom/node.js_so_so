'use strict';
const mountHandler = require('modules/handlers').mountHandler;

exports.init = (app) => {
	mountHandler(__dirname, app);
};