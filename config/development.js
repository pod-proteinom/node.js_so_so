'use strict';

const path = require('path');
const dirname = path.dirname;
const join = path.join;

const rootDir = dirname(__dirname);
const publicDir = join(rootDir, 'src', 'public');

module.exports = {
	port : "3000",
	rootDir,
	publicDir,
	mongoose: {
		uri: 'mongodb://localhost:27017/app',
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
  		level: 'info'
  	}
};