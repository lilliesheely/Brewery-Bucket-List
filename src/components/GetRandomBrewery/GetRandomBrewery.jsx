import RandomBreweryCard from '../RandomBreweryCard/RandomBreweryCard'

export default function GetRandomBrewery({getRandomBrewery, randomBrewery, addBrewery, breweries }) { 
    let ranBreweries = randomBrewery.map((b) => ( <RandomBreweryCard key ={b.name} brewery={b} addBrewery={addBrewery} breweries={breweries}/> ))
        
  return (
    <>
      <button onClick={getRandomBrewery}>Generate New Random Brewery</button>
      {ranBreweries}
    </>
    )}
