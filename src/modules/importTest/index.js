'use strict';

const fs = require('fs');
const join = require('path').join;
const isAbsolute = require('path').isAbsolute;
const basename = require('path').basename;

const importSuite = (path) => {
	if(!isAbsolute(path)) {
		importRoot(path);
	}else {
		importNested(path);
	}
};

const importRoot = (path) => {
	const testRoot = require(join(path, 'test'));
	describe(basename(path) + ' suite', testRoot);
};

const importNested = (testDir) => {
	importIntegration(testDir);
};

const importIntegration = (testDir) => {
	const integrTestsPath = join(testDir, 'integration');
	describesSuites(integrTestsPath);
};

const getSuiteNames = (testDir) => fs.readdirSync(testDir);

const getSuitePathes = (testDir) => getSuiteNames(testDir)
	.map(suiteName => join(testDir, suiteName));

const describesSuites = (testDir) => getSuitePathes(testDir)
	.forEach(pathToSuite => {
		describe(basename(pathToSuite), require(pathToSuite));
	}); 

module.exports = importSuite;