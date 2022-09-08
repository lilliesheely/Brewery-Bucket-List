const express = require('express');
const jwt = require('jsonwebtoken');
const Brewery = require('../../models/brewery');
var fetch = require('node-fetch')

module.exports = {
    index, 
    create,
    show, 
    updateBeenTo, 
    randomBrewery, 
    // createReview, 
    deleteBrewery  
  };

async function create(req, res) {
    req.body.user = req.user._id; 
    const brewery = await Brewery.create(req.body); 
    res.json(brewery);
  }

async function index(req, res) {
     const breweries = await Brewery.find({ user: req.user._id}).sort('beenTo').sort('city').exec()
     res.json(breweries);
}

async function show(req, res) { 
  const brewery = await Brewery.findOne({name: req.body.name, user: req.user._id})
}

async function updateBeenTo(req, res) {
  const brewery = await Brewery.findOne({user: req.user._id, _id: req.params.id})
    brewery.beenTo = true; 
    await brewery.save(); 
  res.json(brewery); 
}

async function randomBrewery(req, res){
  let randomBrewery = await fetch('https://api.openbrewerydb.org/breweries/random')
    .then((response) => response.json())
  res.json(randomBrewery); 
}

async function deleteBrewery(req, res) {
  const brewery = await Brewery.findOneAndDelete({user: req.user._id, _id: req.params.id})
  res.json(brewery)
}

// async function createReview(req, res) {
//   console.log({_id: req.params.id}, "ID");
//   const brewery = await Brewery.findOne({name: req.body.name, user: req.user._id})
//   // brewery.reviews.push(req.body)
//   await brewery.save()
//   console.log(brewery, 'review-brewery')
//   res.json(brewery); 
// }
