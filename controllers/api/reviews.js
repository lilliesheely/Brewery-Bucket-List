const express = require('express');
const Brewery = require('../../models/brewery');

module.exports = {
    create
}

async function create(req, res) {
    const brewery = await Brewery.findOne({user: req.user._id, _id: req.params.id})
    brewery.reviews.push(req.body); 
    await brewery.save();
    res.json(brewery); 
}
  