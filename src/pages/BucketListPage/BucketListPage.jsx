import { useState } from 'react'; 
import BucketListList   from '../../components/BucketListList/BucketListList';
import BucketListForm   from '../../components/BucketListForm/BucketListForm';
import './BucketListPage.css';

export default function BucketListPage() {
  const [breweries, setBreweries] = useState([{}]); 
  function addBrewery(brewery) {
    setBreweries([...breweries, brewery]);
  }
  return (
    <>
    <section className='bucketListPage'>
      <h1>Bucket List</h1>
      <div>
        <BucketListForm addBrewery={addBrewery} />
      </div>
      <div>
        <BucketListList /> 
      </div>
    </section>
    </>  
  );
}