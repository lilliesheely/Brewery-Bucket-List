import { Link } from "react-router-dom";

export default function BucketListItem({brewery, visitedBrewery}) {
    return (
        <>
        <Link 
            to={`/${brewery.name}`} 
            className='list-link'
        > 
        {brewery.beenTo === false ? `${brewery.name} - ${brewery.city}, ${brewery.state}` : `Been to: ${brewery.name} `}
        </Link>
        {brewery.beenTo === false ? <button onClick={() => visitedBrewery(brewery._id)}>✔️</button> : '' } <br />
        </>
     )
    }


    
      