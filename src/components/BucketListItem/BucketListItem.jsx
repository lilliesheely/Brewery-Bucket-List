import { Link } from "react-router-dom";

export default function BucketListItem({brewery, visitedBrewery}) {
    if (brewery.beenTo === false ) 
    return (
        <>
       <li>{brewery.name} - {brewery.city}, {brewery.state}
        <button onClick={() => visitedBrewery(brewery._id)}>✔️</button> </li>
        </>
     )
    }


    
      