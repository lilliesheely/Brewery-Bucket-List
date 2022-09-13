import { useState } from 'react'; 
import GetBreweryByCityCard from '../GetBreweryByCityCard/GetBreweryByCityCard';
import './GetBreweryByCity.css';

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
    const cityBreweries = breweryByCity.map((b, idx) => <GetBreweryByCityCard brews={b} key={idx} addBrewery={addBrewery}/> )
    
    return (
        <>
        <form onSubmit={handleSubmit} className='gbbc-form'>
            <input 
            type='text'
            value={newCity} 
            onChange={handleChange} 
            className='gbbc-input'
            placeholder='ie. Phoenix'
            required
            />
            <button className='gbbc-btn' type='submit'>Search by City</button>
        </form>
        {cityBreweries}
        </>
    )
}