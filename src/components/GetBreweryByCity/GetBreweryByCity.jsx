import { useState } from 'react'; 

export default function GetBreweryByCity({ getBreweryByCity }) {
    const [city, setCity] = useState(
        {cityName: ''} 
    )
    
    async function handleSubmit(evt) {
        evt.preventDefault()
        getBreweryByCity(city); 
        setCity({ 
            cityName: ''
        })
    }

    async function handleChange(evt) {
        setCity({...city, [evt.target.name]: evt.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search by City</label>
            <input 
            type='text'
            name='cityName'
            value={city.cityName.replaceAll(' ', '_')} 
            onChange={handleChange} 
            />
            <button type='submit'>Search</button>
        </form>
    )
}