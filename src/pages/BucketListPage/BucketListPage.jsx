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

  function addBrewery(breweryFormData) {
    const brewery = bucketlistAPI.addOne(breweryFormData);
    setBreweries([...breweries, brewery]);
  }
  console.log(addBrewery)

  return (
    <>
    <section className='bucketListPage'>
      <h1>Bucket List</h1>
      <div>
        <BucketListForm  addBrewery={ addBrewery }/>
      </div>
      <div>
        <BucketListList breweries={breweries}/> 
      </div>
    </section>
    </>  
  );
}