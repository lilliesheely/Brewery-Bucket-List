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
                    <tr className='gbbCard'>
                        <td className='gbbc-table'><h4>{brews.name}</h4> </td>  
                        <td className='gbbc-table'>{brews.city}, {brews.state}</td>
                        <td className='gbbc-table'>{brews.website_url ?  <a href={brews.website_url} target="_blank"><img src="https://i.imgur.com/JLg6QnE.png" alt="" /></a> : 'No website available'}</td> 
                        <td className='gbbc-table'>
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