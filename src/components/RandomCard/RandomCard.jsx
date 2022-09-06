export default function RandomCard({brewery}){
    return(
    <div>
        <h1>{brewery.name} </h1>
        <h3>{brewery.brewery_type} </h3>
        <h3>{brewery.street} </h3>
        <h3>{brewery.city} </h3>
        <h3>{brewery.state} </h3>
        <a href={brewery.website_url} target='_blank'>Website</a>
    </div>
    )
}