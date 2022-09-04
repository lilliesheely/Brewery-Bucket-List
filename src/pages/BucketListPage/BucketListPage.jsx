import { useState, useEffect } from 'react'; 
import * as bucketlistAPI from "../../utilities/bucket-list-api"
import BucketListList   from '../../components/BucketListList/BucketListList';
import BucketListForm   from '../../components/BucketListForm/BucketListForm';
import './BucketListPage.css';

export default function BucketListPage() {
  const [breweries, setBreweries] = useState([]); 
  
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

  return (
    <>
    <section className='bucketListPage'>
      <div>
        <h1>Add Brewery to Bucket List!</h1>
        <BucketListForm  addBrewery={ addBrewery }/>
      </div>
      <div>
        <h2>Bucket List</h2>
        <BucketListList breweries={breweries}/> 
      </div>
    </section>
    </>  
  );
}