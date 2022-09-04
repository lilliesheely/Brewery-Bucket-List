const express = require('express');
const router = express.Router();
const breweriesCtrl = require('../../controllers/api/breweries');


router.get('/', breweriesCtrl.index); 
router.post('/', breweriesCtrl.create);
router.get('/:id', breweriesCtrl.show )
// router.put('/', breweriesCtrl.update )

module.exports = router;