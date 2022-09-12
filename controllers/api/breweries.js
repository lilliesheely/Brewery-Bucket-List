const express = require('express');
const jwt = require('jsonwebtoken');
const Brewery = require('../../models/brewery');
var fetch = require('node-fetch')
const api_url = 'https://api.openbrewerydb.org/breweries?by_city='
const perCity= '&per_page=3'


module.exports = {
    index, 
    create,
    show, 
    updateBeenTo, 
    randomBrewery, 
    deleteBrewery,  
    breweryByCity
  };

async function create(req, res) {
  req.body.user = req.user._id; 
  const brewery = await Brewery.create(req.body); 
  res.json(brewery);
}

async function index(req, res) {
  const breweries = await Brewery.find({ user: req.user._id}).sort('state').sort('-city').exec()
  res.json(breweries);
}

async function show(req, res) { 
  const brewery = await Brewery.findOne({_id: req.params.id, user: req.user._id})
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
  res.json(brewery);
}

async function breweryByCity(req, res) {
  let breweriesByCity = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${req.params.city}&per_page=5`)
    .then((response) => response.json())
  res.json(breweriesByCity)
}

