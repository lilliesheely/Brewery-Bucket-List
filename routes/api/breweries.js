const express = require('express');
const router = express.Router();
const breweriesCtrl = require('../../controllers/api/breweries');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/new', ensureLoggedIn, breweriesCtrl.create);
router.get('/index', ensureLoggedIn, breweriesCtrl.index); 

module.exports = router;