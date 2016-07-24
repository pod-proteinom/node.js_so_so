'use strict';

const join = require('path').join;
const importTest = require('modules/importTest');

module.exports = () => {
	importTest(__dirname);
};