'use strict';

const handlers = require('modules/handlers').handlers;

const app = require('./app');

function requireHandler (handlerName, app) {
	const join = require('path').join;
	const handler = require(join('handlers', handlerName));
	if(handler.init) {
		handler.init(app);
	}
}

handlers.forEach(handler => requireHandler(handler, app));

module.exports = app;