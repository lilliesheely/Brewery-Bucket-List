import RandomBreweryCard from '../RandomBreweryCard/RandomBreweryCard'
import './GetRandomBrewery.css'

export default function GetRandomBrewery({ getRandomBrewery, randomBrewery, addBrewery, breweries }) { 
    let ranBreweries = randomBrewery.map((b) => ( <RandomBreweryCard key ={b.name} brewery={b} addBrewery={addBrewery} breweries={breweries}/> ))
        
  return (
    <>
      <button className='grb-btn' onClick={getRandomBrewery}>Get Random Brewery</button>
      {ranBreweries}
    </>
    )}
