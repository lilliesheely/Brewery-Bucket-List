import { Link } from "react-router-dom";

export default function BucketListItem({brewery}) {
    return (
        <>
        <Link 
            to={`/${brewery.name}`} 
            brewery={brewery}
        >
            <li>{brewery.name} - {brewery.city}, {brewery.state} </li>
        </Link>
        </>
     )
}