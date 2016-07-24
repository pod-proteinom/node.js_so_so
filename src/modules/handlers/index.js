'use strict';

const handlers = [
	'serveStatic',
	'morgan',
	'frontpage'
];

const mountHandler = function(moduleDir, app) {
	const join = require('path').join;
	const router = require(join(moduleDir, 'router'));
	app.use((req, res, next) => {
		req.viewDir = join(moduleDir, 'views');
		next();
	});
	app.use('/', router);
};

exports.handlers = handlers;

exports.mountHandler = mountHandler;