import './RandomBreweryCard.css'
export default function RandomBreweryCard({brewery}){
    return(
    <div>
        <h1>{brewery.name} </h1>
        <h4> <i>{brewery.brewery_type} </i></h4>
        <p>{brewery.street}, <br />{brewery.city}, {brewery.state} </p>
        {brewery.website_url ?  <a href={brewery.website_url} target='_blank' className='RBC-atag'>Website</a> : '' }
    </div>
    )
}