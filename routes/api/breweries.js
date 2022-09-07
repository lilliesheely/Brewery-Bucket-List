const express = require('express');
const router = express.Router();
const breweriesCtrl = require('../../controllers/api/breweries');


router.get('/', breweriesCtrl.index); 
router.post('/', breweriesCtrl.create);
router.get('/random', breweriesCtrl.randomBrewery)
router.put('/:id', breweriesCtrl.updateBeenTo); 
router.get('/:id', breweriesCtrl.show); 

module.exports = router;