import { useState, useEffect } from 'react'; 
import * as bucketlistAPI from "../../utilities/bucket-list-api"
import BucketListList   from '../../components/BucketListList/BucketListList';
import BucketListForm   from '../../components/BucketListForm/BucketListForm';
import GetRandomBrewery from '../../components/GetRandomBrewery/GetRandomBrewery';
import SearchCity from '../../components/SearchCity/SearchCity'
import './BucketListPage.css';

export default function BucketListPage() {
  const [breweries, setBreweries] = useState([]); 
  console.log(breweries); 
  
  useEffect(function() { 
    async function getBreweries() { 
      const allBreweries = await bucketlistAPI.getAll(); 
      setBreweries(allBreweries); 
    }
    getBreweries(); 
  }, []); 
 

  async function addBrewery(breweryFormData) {
    const brewery = await bucketlistAPI.addOne(breweryFormData);
    setBreweries([...breweries, brewery]);
  }

  async function visitedBrewery(data) {
    const visited = await bucketlistAPI.updateBeenTo(data)
      setBreweries(visited); 
    }

  return (
    <>
    <section className='bucketListPage'>
      <div>
        <h1>Add Brewery to Bucket List!</h1>
        <BucketListForm  addBrewery={ addBrewery }/>
      </div>
      <div>
        <h2>Bucket List</h2>
        <BucketListList breweries={breweries} visitedBrewery={visitedBrewery}/> 
      </div>
      <div> 
        <h2>Random Brewery</h2> 
        <GetRandomBrewery /> 
      </div>
      <div> 
        <h2>Search Breweries by City</h2> 
        <SearchCity /> 
      </div>
    </section>
    </>  
  );
}







  
 