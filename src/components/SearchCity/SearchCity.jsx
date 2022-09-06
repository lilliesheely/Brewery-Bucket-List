import {useState} from 'react'; 
import SearchCityForm from '../SearchCityForm/SearchCityForm';
export default function SearchCity() {

  async function searchByCity(evt){
    evt.preventDefault(); 
  }

  async function onChange() {
  }

  const [breweryByCity, setBreweryByCity] = useState([]);
  const [city, setCity] = useState('');
//   fetch('https://api.openbrewerydb.org/breweries?by_city=san_diego&per_page=5')
  function handleClick() {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=2`)
      .then(response => response.json())
      .then(data => {
        setBreweryByCity(data)
      });

  return (
    <> 
        <h2>Search Breweries by City</h2> 
        <form onSubmit={searchByCity}>
            <label>Enter City</label>
            <input type="text"
            onChange={onChange}
            value={city} />
            <button type='submit'>Search</button>
        </form>
        <div>
        {breweryByCity.map((b) => { 
            const {
                name, 
                brewery_type, 
                street, 
                city, 
                state, 
                website_url 
            } = b
      return (
        <div key={name}> 
        <h1>{name} </h1> 
        <h3>{brewery_type} </h3> 
        <h3>{street} </h3> 
        <h3>{city} </h3> 
        <h3>{state} </h3> 
        <a href={website_url} target="_blank">website</a> <br />
        <button onClick={handleClick}>Add Brewery To BucketList</button>
        </div>
      )
        })}
        </div>
    </>
  )
}
}



        // 

