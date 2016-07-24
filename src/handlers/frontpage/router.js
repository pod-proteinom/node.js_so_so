'use strict';

const express = require('express');
const router = express.Router();

const Page = require('modules/page');

router.get(Page.HOME, (req, res) => {
	res.render('home');
});

module.exports = router;