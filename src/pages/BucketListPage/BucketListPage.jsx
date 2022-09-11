import { useState, useEffect } from 'react'; 
import * as breweriesAPI from "../../utilities/breweries-api"
import BucketListList   from '../../components/BucketListList/BucketListList';
import BucketListForm   from '../../components/BucketListForm/BucketListForm';
import GetRandomBrewery from '../../components/GetRandomBrewery/GetRandomBrewery';
import GetBreweryByCity from '../../components/GetBreweryByCity/GetBreweryByCity';

import './BucketListPage.css';

export default function BucketListPage({breweries, setBreweries}) {
  const [randomBrewery, setRandomBrewery] = useState([]); 
  const [breweryByCity, setBreweryByCity] = useState([]); 

  console.log(breweryByCity, 'CITY')
  async function addBrewery(breweryFormData) {
    const brewery = await breweriesAPI.addOne(breweryFormData);
    setBreweries([...breweries, brewery]);
  }
  
  async function visitedBrewery(id) {
    const visited = await breweriesAPI.updateBeenTo(id);
    const updatedList = breweries.map(b => b._id === visited._id ? visited : b)
    
    console.log('visited', visited) 
    setBreweries(updatedList); 
  }

  async function getRandomBrewery() {
    const randomBreweries = await breweriesAPI.getRandomBrewery(); 
    setRandomBrewery(randomBreweries); 
  }

  async function deleteBrewery(id) {
    const brewerySpots = await breweriesAPI.deleteBrewery(id);
    const updatedList = breweries.filter((b) => b._id !== brewerySpots._id)
    setBreweries(updatedList);
  }

  async function getBreweryByCity(city) {
    const breweriesByCity = await breweriesAPI.getBreweriesByCity(city); 
    setBreweryByCity(breweriesByCity)
  }

  return (
    <>
      <section className='bucketListPage'>
        <h1 className='bl-h1'>Find your dream</h1>
        <div className='blf-div'>
          <BucketListForm  addBrewery={ addBrewery }/>
        </div>
        <div className='blf-div'>
          <BucketListList breweries={breweries} visitedBrewery={visitedBrewery} deleteBrewery={deleteBrewery} /> 
        </div>
        <div className='blf-div'> 
        <GetBreweryByCity getBreweryByCity={getBreweryByCity} breweryByCity={breweryByCity} addBrewery={addBrewery}/>
        </div>
        <div className='blf-div'> 
          <GetRandomBrewery getRandomBrewery={getRandomBrewery} randomBrewery={randomBrewery} addBrewery={addBrewery} breweries={breweries} /> 
        </div>
      </section>
    </>  
  );
}







  
 