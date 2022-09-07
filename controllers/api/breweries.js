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
    createReview, 
    addRandomBrewery  
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

async function createReview(req, res) {
  console.log({_id: req.params.id}, "ID");
  const brewery = await Brewery.findOne({name: req.body.name, user: req.user._id})
  // brewery.reviews.push(req.body)
  await brewery.save()
  console.log(brewery, 'review-brewery')
  res.json(brewery); 
}

async function addRandomBrewery(req, res) {
  req.body.user = req.user._id; 
  const brewery = await Brewery.addRandomBrewery(
    req.body.name = name,
    req.body.breweryType = brewery_type,
    req.body.street = address,
    req.body.city = city,
    req.body.state = state,
    ); 
    await brewery.save()
    console.log(brewery, "addrandombrewery")
  res.json(brewery);
}