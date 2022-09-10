import './BreweryByCityCard.css'
export default function BreweryByCityCard({ brews, addBrewery }){
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


    return (
        <>
        
        <table>
            
                <tbody>
                    <tr>
                        <td><h4>{brews.name}</h4> </td>
                        <td><i>{brews.brewery_type}</i></td>
                        <td>{brews.city}</td>
                        <td>{brews.state}</td>
                        <td>{brews.website_url ?  <a href={brews.website_url} target='_blank' className='RBC-atag'>Website</a> : 'No website available'}</td> 
                        <td>
                            <form onSubmit={handleSubmit}>
                                <input type='hidden' 
                                    value={brews.name}
                                    name='name'
                                />
                                <input type='hidden' 
                                    value={brews.brewery_type}
                                    name='breweryType'
                                />
                                <input type='hidden' 
                                    value={brews.street}
                                    name='address'
                                />
                                <input type='hidden' 
                                    value={brews.city}
                                    name='city'
                                />
                                <input type='hidden' 
                                    value={brews.state}
                                    name='state'
                                />
                                <button className='breweryByCity-btn' type='submit'></button> 
                            </form>
                        </td>    
                    </tr>
                </tbody>
            </table>
        
        
        </>
    )
}