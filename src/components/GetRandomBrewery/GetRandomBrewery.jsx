import {useState, useEffect} from 'react'; 
import RandomCard from '../RandomCard/RandomCard';

export default function GetRandomBrewery({getRandomBrewery, randomBrewery}) { 
    console.log(randomBrewery, 'prop-random')
    let breweries = randomBrewery.map((b) => ( <RandomCard key ={b.name} brewery={b} /> ))
        
  return (
    <>
      <button onClick={getRandomBrewery}>Generate New Random Brewery</button>
      {breweries}
    </>
    )}
