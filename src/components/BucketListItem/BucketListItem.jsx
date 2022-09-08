import { Link } from "react-router-dom";

export default function BucketListItem({ brewery, visitedBrewery, deleteBrewery }) {
    if (brewery.beenTo === false ) 
    return (
        <>
        <li>{brewery.name} - {brewery.city}, {brewery.state}
            <button onClick={() => visitedBrewery(brewery._id)}>✔️</button>
            <button onClick={() => deleteBrewery(brewery._id)}>❌</button>
        </li>
        </>
     )
    }


    
      