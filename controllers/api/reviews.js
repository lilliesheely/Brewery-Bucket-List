const express = require('express');
const jwt = require('jsonwebtoken');
const Brewery = require('../../models/brewery');

module.exports = {
    create
}

async function create(req, res) {
    console.log(req.params.id, "ID");
    const brewery = await Brewery.findOne({user: req.user._id, _id: req.params.id})
    brewery.reviews.push(req.body); 
    await brewery.save();
    console.log(brewery, 'review-brewery')
    res.json(brewery); 
  }
  