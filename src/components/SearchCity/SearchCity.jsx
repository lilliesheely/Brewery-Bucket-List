import {useState} from 'react'; 

export default function SearchCity() {

  
  async function handleClick(){
    alert('clicked')
  }

  async function searchByCity(evt){
    evt.preventDefault(); 
  }

  async function onChange() {
  
  }

  const [breweryByCity, setBreweryByCity] = useState([]);
  const [city, setCity] = useState('');
//   fetch('https://api.openbrewerydb.org/breweries?by_city=san_diego&per_page=5')
  fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}&per_page=2`)
      .then(response => response.json())
      .then(data => {
        setBreweryByCity(data)
      });

  return (
    <> 
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
        <a href={website_url}>website</a>
        <button onClick={handleClick}>Add Brewery To BucketList</button>
        </div>
      )
        })}
        </div>
        <form onSubmit={searchByCity}>
            <label>Enter City</label>
            <input type="text"
            onChange={onChange}
            value={city} />
            <button type='submit'>Search</button>
        </form>
    </>
  )
}
