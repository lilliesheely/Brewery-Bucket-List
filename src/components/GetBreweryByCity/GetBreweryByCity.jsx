import { useState } from 'react'; 

export default function GetBreweryByCity({ getBreweryByCity }) {
    const [newCity, setNewCity] = useState('')
    

    async function handleSubmit(evt) {
        evt.preventDefault()
        getBreweryByCity(newCity); 
        setNewCity('')
    }

    async function handleChange(evt) {
        setNewCity(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search by City</label>
            <input 
            type='text'
            value={newCity} 
            onChange={handleChange} 
            />
            <button type='submit'>Search</button>
        </form>
    )
}