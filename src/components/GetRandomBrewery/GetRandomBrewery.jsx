import {useState} from 'react'; 

export default function GetRandomBrewery() {
const [randomBrewery, setRandomBrewery] = useState([]);
  fetch("https://api.openbrewerydb.org/breweries/random")
      .then(response => response.json())
      .then(data => {
        setRandomBrewery(data)
      });
  
  async function handleClick(){
    alert('clicked')
  }

  async function newRandomBrewery(){
    alert('clicked')
  }
  return (
    <>
      <div>
        {randomBrewery.map((b) => { 
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
        <button onClick={newRandomBrewery}>Generate New Random Brewery</button>
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
    </>
  )
}
