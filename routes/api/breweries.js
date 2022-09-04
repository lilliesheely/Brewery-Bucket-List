const express = require('express');
const router = express.Router();
const breweriesCtrl = require('../../controllers/api/breweries');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', ensureLoggedIn, breweriesCtrl.create);
router.get('/', ensureLoggedIn, breweriesCtrl.index); 

module.exports = router;