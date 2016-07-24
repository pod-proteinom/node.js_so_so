'use strict';

const path = require('path');
const dirname = path.dirname;
const join = path.join;

const rootDir = dirname(__dirname);
const publicDir = join(rootDir, 'src', 'public');

const hostname = 'http://localhost:';
const port = '6666';
const server = hostname + port;

module.exports = {
	hostname,
	port,
	server,
	rootDir,
	publicDir,
	rootSuiteName: 'Test suites',
	mongoose: {
		uri: 'mongodb://localhost:27017/test',
		options: {
		  server: {
			socketOptions: {
			  keepAlive: 1
			},
			poolSize: 5
		  }
		}
  	},
  	logger: {
  		level: 'warn'
  	}
};