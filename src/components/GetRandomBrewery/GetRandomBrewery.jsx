import RandomBreweryCard from '../RandomBreweryCard/RandomBreweryCard';

export default function GetRandomBrewery({getRandomBrewery, randomBrewery}) { 
    let breweries = randomBrewery.map((b) => ( <RandomBreweryCard key ={b.name} brewery={b} /> ))
        
  return (
    <>
      <button onClick={getRandomBrewery}>Generate New Random Brewery</button>
      {breweries}
    </>
    )}
