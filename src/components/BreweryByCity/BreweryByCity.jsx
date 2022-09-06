import {useState} from 'react'; 
export default function BreweryByCity({getBreweryByCity}) {
  const [cityBrewery, setCityBrewery] = useState({
    search: ''
  })



  function handleChange(evt) {
    setCityBrewery({...cityBrewery,[evt.target.name]: evt.target.value})  
  }
  return (
    <> 
      <form onSubmit={getBreweryByCity}>
        <label>Search a City</label>
        <input 
          name='search'
          value={cityBrewery.search} 
          onChange={handleChange}
          type='text' 
        />
      <button type='submit'>Search</button>
      </form> 
    </>
  )
}

