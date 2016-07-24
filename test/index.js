'use strict';

const conf = require('config');

const chai = require('chai');

const importTest = require('modules/importTest');

describe(conf.rootSuiteName, () => {
	let server;

	before(() => {
		server = require('bin');
	});

	after(() => {
		server.close();
	});

	importTest('handlers/frontpage');
});