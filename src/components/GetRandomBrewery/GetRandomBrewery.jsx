import GetRandomBreweryCard from '../GetRandomBreweryCard/GetRandomBreweryCard';
import './GetRandomBrewery.css';

export default function GetRandomBrewery({ getRandomBrewery, randomBrewery, addBrewery, breweries }) { 
    let ranBreweries = randomBrewery.map((b) => ( <GetRandomBreweryCard key ={b.name} brewery={b} addBrewery={addBrewery} breweries={breweries}/> ))
        
  return (
    <>
      <button className='grb-btn' onClick={getRandomBrewery}>Get Random Brewery</button>
      {ranBreweries}
    </>
  )
}
