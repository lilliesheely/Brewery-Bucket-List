import './GetBreweryByCityCard.css';

export default function BreweryByCityCard({ brews, addBrewery }){
    function handleSubmit(evt) {
        evt.preventDefault(); 
        const newBrewery = {
            name: evt.target[0].value, 
            breweryType: evt.target[1].value,
            address: evt.target[2].value,
            city: evt.target[3].value,
            state: evt.target[4].value,
            website: evt.target[5].value,
            beenTo: false, 
         }
         addBrewery(newBrewery); 
    }

    return (
        <>
        
        <table>
            
                <tbody>
                    <tr className='gbbCard'>
                        <td className='gbbc-table' id='bn-API'><h4>{brews.name}</h4> </td>  
                        <td className='gbbc-table'>{brews.city}, {brews.state}</td>
                        <td className='gbbc-table'>{brews.website_url ?  <a href={brews.website_url} target="_blank" rel="noreferrer" ><img src="https://i.imgur.com/oQiXwLh.png" alt="website icon" /></a> : 'No website available'}</td> 
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
                                 <input type='hidden' 
                                    value={brews.website_url}
                                    name='website'
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