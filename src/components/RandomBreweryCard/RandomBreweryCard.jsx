import { useState } from 'react'; 
import './RandomBreweryCard.css'

export default function RandomBreweryCard({brewery, addBrewery}){
//    console.log(brewery, "random brewery")
//    const [newBrewery, setNewBrewery] = useState ({
//         name: '', 
//         breweryType: '',
//         address: '',
//         city: '',
//         state: '',
//         beenTo: false, 
//     }) 

   function handleSubmit(evt) {
       evt.preventDefault(); 
       const newBrewery = {
           name: evt.target[0].value, 
           breweryType: evt.target[1].value,
           address: evt.target[2].value,
           city: evt.target[3].value,
           state: evt.target[4].value,
           beenTo: false, 
        }
        console.log(newBrewery, "testing")
        addBrewery(newBrewery); 
   }
//    function handleChange(evt){ 
//     setNewBrewery({ ...newBrewery, [evt.target.name]: evt.target.value})
//     }

    return(
    <div>
        <h1>{brewery.name} </h1>
        <h4> <i>{brewery.brewery_type} </i></h4>
        <p>{brewery.street}, <br />{brewery.city}, {brewery.state} </p>
        {brewery.website_url ?  <a href={brewery.website_url} target='_blank' className='RBC-atag'>Website</a> : '' } <br />
        
        <form onSubmit={handleSubmit}>
            <input type='hidden' 
                value={brewery.name}
                name='name'
            />
            <input type='hidden' 
                value={brewery.brewery_type}
                name='breweryType'
            />
            <input type='hidden' 
                value={brewery.street}
                name='address'
            />
            <input type='hidden' 
                value={brewery.name}
                name='city'
            />
            <input type='hidden' 
                value={brewery.state}
                name='state'
            />
            <button type='submit'>Add to Bucket List</button>
        </form>
    </div>
    )
}