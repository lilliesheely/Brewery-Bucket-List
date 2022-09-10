import { useState } from 'react'; 
import BreweryByCityCard from '../BreweryByCityCard/BreweryByCityCard';
import './GetBreweryByCity.css'

export default function GetBreweryByCity({ getBreweryByCity, breweryByCity, addBrewery }) {
    const [newCity, setNewCity] = useState('')
    
    async function handleSubmit(evt) {
        evt.preventDefault()
        getBreweryByCity(newCity); 
        setNewCity('')
    }

    async function handleChange(evt) {
        setNewCity(evt.target.value)
    }
    const cityBreweries = breweryByCity.map((b, idx) => <BreweryByCityCard brews={b} key={idx} addBrewery={addBrewery}/> )
    return (
        <>
        <form className='gbbc-form' onSubmit={handleSubmit}>
            <label>Search by City</label>
            <input 
            type='text'
            value={newCity} 
            onChange={handleChange} 
            className='gbbc-input'
            />
            <button className='gbbc-btn' type='submit'>Search</button>
        </form>
        {cityBreweries}
        </>
    )
}