const jwt = require('jsonwebtoken');
const Brewery = require('../../models/brewery');

module.exports = {
    index, 
    create   
  };

  async function create(req, res) {
    req.body.user = req.user._id; 
    const brewery = await Brewery.create(req.body); 
    res.json(brewery);
  }

async function index(req, res) {
     const breweries = await Brewery.find({ user: req.user._id})
     console.log(breweries, index)
     res.json(breweries)
}