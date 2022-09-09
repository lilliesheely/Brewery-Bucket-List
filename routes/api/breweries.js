const express = require('express');
const router = express.Router();
const breweriesCtrl = require('../../controllers/api/breweries');

router.get('/', breweriesCtrl.index); 
router.post('/', breweriesCtrl.create);
router.get('/random', breweriesCtrl.randomBrewery);
router.get('/city/:city', breweriesCtrl.breweryByCity); 
router.put('/update/:id', breweriesCtrl.updateBeenTo); 
router.get('/:id', breweriesCtrl.show); 
router.delete('/:id', breweriesCtrl.deleteBrewery);

module.exports = router;