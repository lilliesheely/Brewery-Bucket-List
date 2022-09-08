const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');

router.post('/:id/reviews', reviewsCtrl.create);

module.exports = router;