import { useState } from 'react'; 
import BucketListList   from '../../components/BucketListList/BucketListList';
import BucketListForm   from '../../components/BucketListForm/BucketListForm';
import './BucketListPage.css';

export default function BucketListPage() {
  const [breweries, setBreweries] = useState([ 
    {
      name: '', 
      type: '',
      address: '',
      city: '',
      state: '',
      beenTo: false 
    }
  ]); 
  function addBrewery(brewery) {
    setBreweries([...breweries, brewery]);
  }
  console.log(breweries, 'BL page')
  return (
    <>
    <section className='bucketListPage'>
      <h1>Bucket List</h1>
      <div>
        <BucketListForm addBrewery={addBrewery} />
      </div>
      <div>
        <BucketListList breweries={breweries}/> 
      </div>
    </section>
    </>  
  );
}