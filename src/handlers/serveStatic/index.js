'use strict';

const conf = require('config');
const express = require('express');

exports.init = (app) => {
	const NODE_ENV = conf.util.getEnv('NODE_ENV');
	if(NODE_ENV == 'dev') {
		app.use(express.static(conf.publicDir));	
	}
};