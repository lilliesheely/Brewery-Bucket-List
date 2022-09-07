import { useState, useEffect } from 'react'; 
import {useNavigate} from 'react-router-dom'; 
import * as breweriesAPI from "../../utilities/breweries-api"
import BucketListList   from '../../components/BucketListList/BucketListList';
import BucketListForm   from '../../components/BucketListForm/BucketListForm';
import GetRandomBrewery from '../../components/GetRandomBrewery/GetRandomBrewery';
// import BreweryByCity from '../../components/BreweryByCity/BreweryByCity'
import './BucketListPage.css';

export default function BucketListPage({breweries, setBreweries}) {
  const [randomBrewery, setRandomBrewery] = useState([]); 
  const navigate = useNavigate();
  // const [breweryCity, setCityBrewery] = useState([]);

  
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
  
  async function visitedBrewery(id) {
      const visited = await breweriesAPI.updateBeenTo(id);
      setBreweries([...breweries, visited]); 
      console.log(breweries)
  }

  async function getRandomBrewery() {
    const randomBreweries = await breweriesAPI.getRandomBrewery(); 
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
      <div></div>
      <div> 
       
      </div>
    </section>
    </>  
  );
}







  
 