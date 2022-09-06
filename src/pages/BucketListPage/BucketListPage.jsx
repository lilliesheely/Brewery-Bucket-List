import { useState, useEffect } from 'react'; 
import * as breweriesAPI from "../../utilities/breweries-api"
import BucketListList   from '../../components/BucketListList/BucketListList';
import BucketListForm   from '../../components/BucketListForm/BucketListForm';
import GetRandomBrewery from '../../components/GetRandomBrewery/GetRandomBrewery';
import SearchCity from '../../components/SearchCity/SearchCity'
import './BucketListPage.css';

export default function BucketListPage() {
  const [breweries, setBreweries] = useState([]);
  const [randomBrewery, setRandomBrewery] = useState([]); 
  console.log(breweries); 
  
  useEffect(function() { 
    async function getBreweries() { 
      const allBreweries = await breweriesAPI.getAll(); 
      setBreweries(allBreweries); 
    }
    getBreweries(); 
  }, []); 
 

  async function addBrewery(breweryFormData) {
    const brewery = await breweriesAPI.addOne(breweryFormData);
    setBreweries([...breweries, brewery]);
  }

  async function visitedBrewery(data) {
    const visited = await breweriesAPI.updateBeenTo(data)
      setBreweries(visited); 
  }

  async function getRandomBrewery() {
    const randomBreweries = await breweriesAPI.getRandomBrewery(); 
    console.log(randomBreweries)
    setRandomBrewery(randomBreweries); 
  }

  return (
    <>
    <section className='bucketListPage'>
      <div>
        <BucketListForm  addBrewery={ addBrewery }/>
      </div>
      <div>
        <BucketListList breweries={breweries} visitedBrewery={visitedBrewery}/> 
      </div>
      <div> 
        <GetRandomBrewery getRandomBrewery={getRandomBrewery} randomBrewery={randomBrewery} /> 
      </div>
      <div> 
        <SearchCity /> 
      </div>
    </section>
    </>  
  );
}







  
 