import './RandomBreweryCard.css'

export default function RandomBreweryCard({brewery, addBrewery}){
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
    return(
        <div className='randomBreweriesCardCom'>
            <table>
            
                <tbody>
                    <tr className='randomBreweriesCard'>
                        <td className='rbc-table'><h4>{brewery.name}</h4></td>
                        <td className='rbc-table'><i>{brewery.brewery_type} </i></td>
                        <td className='rbc-table'>{brewery.city}, {brewery.state} </td>
                        <td className='rbc-table'>{brewery.website_url ?  <a href={brewery.website_url} target='_blank' className='RBC-atag'>Website</a> : 'No website available'}</td> 
                        <td>
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
                                    value={brewery.city}
                                    name='city'
                                />
                                <input type='hidden' 
                                    value={brewery.state}
                                    name='state'
                                />
                                <button className='rbc-btn' type='submit'></button> 
                            </form>
                        </td>    
                    </tr>
                </tbody>
            </table>

            
        </div>
    )
}