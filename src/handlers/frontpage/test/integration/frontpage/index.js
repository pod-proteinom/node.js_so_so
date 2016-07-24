'use strict';

const conf = require('config');

const chai = require('chai'),
	expect = chai.expect;

const request = require("supertest-as-promised");
const Page = require('modules/page');

module.exports = () => {
	it(`Should get ${Page.HOME}`, () => {
		return request(conf.server)
			.get(Page.HOME).expect(200).then(res => {
				// Something else expect
			}).catch(err => {
				throw err;
			});	
	});
};