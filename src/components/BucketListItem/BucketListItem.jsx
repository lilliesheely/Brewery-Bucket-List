import { Link } from "react-router-dom";

export default function BucketListItem({brewery, visitedBrewery, index}) {
    return (
        <>
        <Link 
            to={`/${brewery.name}`} 
            className='list-link'
        >
       {brewery.beenTo ? <s>`${brewery.name} - ${brewery.city}, ${brewery.state}` </s>: `${brewery.name} - ${brewery.city}, ${brewery.state}`} 
        </Link>
        <button onClick={() => visitedBrewery(index)}>✔️</button>
        </>
     )
    }


    
      