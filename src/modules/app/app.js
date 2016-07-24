'use strict';

const conf = require('config');
const join = require('path').join;

const express = require('express');
const render = express.response.render;

const logger = require('modules/logger');

express.response.render = function(view, options, callback) {
	options = options || {};
	options.basedir  = join(conf.rootDir, 'src', 'views');
	view = join(this.req.viewDir, view);

	logger.debug(`View directory: ${this.req.viewDir}`);
	
	render.apply(this, [view, options, callback]);
};

const app = express();

app.set('view engine', 'pug');

module.exports = app;