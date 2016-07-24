'use strict';

const conf = require('config');
const morgan = require('morgan');

exports.init = (app) => {
	const NODE_ENV = conf.util.getEnv('NODE_ENV');
	if(NODE_ENV == 'dev') {
		app.use(morgan('dev'));
	} else if(NODE_ENV == 'production') {
		app.use(morgan('tiny'));
	} 
};