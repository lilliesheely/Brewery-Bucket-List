import { useState } from 'react'; 
import './BucketListForm.css'

export default function BucketListForm({ addBrewery }) { 
    const [newBrewery, setNewBrewery] = useState ({
        name: '', 
        breweryType: '',
        address: '',
        city: '',
        state: '',
        beenTo: false, 
    }) 
    function handleSubmit(evt) {
        evt.preventDefault(); 
        addBrewery(newBrewery); 
    }
    function handleChange(evt){ 
        setNewBrewery({ ...newBrewery, [evt.target.name]: evt.target.value})
        
    }
    return (
        <>
            <h1>Add Brewery to Bucket List!</h1>
            <form onSubmit={handleSubmit} className='breweryForm'>
                <label>Brewery Name</label>
                <input
                    name="name"
                    value={newBrewery.name}
                    onChange={handleChange}
                    placeholder="Brewery Name"
                    type="text"
                />
                <label>Type</label>
                <input
                    name="type"
                    value={newBrewery.breweryType}
                    onChange={handleChange}
                    placeholder="ie: Micro, brewpub, taproom, etc."
                    type="text"
                />  
                <label>Address</label>
                <input 
                    type="text" 
                    value={newBrewery.address}
                    name="address"
                    onChange={handleChange}
                />
                <label>City</label>
                <input 
                    type="text" 
                    value={newBrewery.city}
                    name="city"
                    onChange={handleChange}
                />
                <label>State</label>
                <input 
                    type="text" 
                    name="state"
                    value={newBrewery.state}
                    onChange={handleChange}
                />
                <button type="submit">ADD BREWERY</button>
            </form>
        </>
    )
   
}
