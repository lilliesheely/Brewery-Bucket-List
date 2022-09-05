const express = require('express');
const jwt = require('jsonwebtoken');
const Brewery = require('../../models/brewery');

module.exports = {
    index, 
    create,
    show, 
    updateBeenTo  
  };

async function create(req, res) {
    req.body.user = req.user._id; 
    const brewery = await Brewery.create(req.body); 
    res.json(brewery);
  }

async function index(req, res) {
     const breweries = await Brewery.find({ user: req.user._id})
     res.json(breweries);
}

async function show(req, res) { 
  const brewery = await Brewery.findOne({name: req.body.name})
  res.json(brewery); 
}

async function updateBeenTo(req, res) {
  const brewery = await Brewery.findOne({name: req.body.name, _id: req.params.id})
  console.log(brewery, 'update')
  // brewery.beenTo = true; 
  res.json(brewery); 
}