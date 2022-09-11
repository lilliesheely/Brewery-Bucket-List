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
        setNewBrewery({
            name: '', 
            breweryType: '',
            address: '',
            city: '',
            state: '',
            beenTo: false, 
        })
    }
    function handleChange(evt){ 
        setNewBrewery({ ...newBrewery, [evt.target.name]: evt.target.value})
        
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='breweryForm'>
                <label className='blFormLabel'>Brewery Name</label>
                <input
                    name='name'
                    value={newBrewery.name}
                    onChange={handleChange}
                    type='text'
                    className='blFormInput'
                />
                <label className='blFormLabel'>Type</label>
                <input
                    name='breweryType'
                    value={newBrewery.breweryType}
                    onChange={handleChange}
                    placeholder='ie: micro, brewpub'
                    type='text'
                    className='blFormInput'
                />  
                <label className='blFormLabel'>Address</label>
                <input 
                    type='text' 
                    value={newBrewery.address}
                    name='address'
                    onChange={handleChange}
                    className='blFormInput'
                />
                <label className='blFormLabel'>City</label>
                <input 
                    type='text' 
                    value={newBrewery.city}
                    name='city'
                    onChange={handleChange}
                    className='blFormInput'
                />
                <label className='blFormLabel'>State</label>
                <input 
                    type='text' 
                    name='state'
                    value={newBrewery.state}
                    onChange={handleChange}
                    className='blFormInput'
                />
                <button className='blbutton' type='submit'>ADD BREWERY TO BUCKET LIST</button>
            </form>
        </>
    )
}
