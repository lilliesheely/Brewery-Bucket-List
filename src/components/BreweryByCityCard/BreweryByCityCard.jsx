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
        <h1>{brews.name}</h1>
        <h1>{brews.type}</h1>
        <h1>{brews.address}</h1>
        <h1>{brews.city}</h1>
        <h1>{brews.state}</h1>
        <a href={brews.website_url} target='_blank'>Website</a>
        
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
                    value={brews.name}
                    name='city'
                />
                <input type='hidden' 
                    value={brews.state}
                    name='state'
                />
        <button type='submit'>Add to Bucket</button>
        </form>
        </>
    )
}