import { Link } from 'react-router-dom'
export default function BreweriesCard({brewery}){
    console.log(brewery)
    return(
        <>
        <Link 
        to={`/${brewery.name}`} 
        className='list-link'
        > 
        {brewery.beenTo === true ?
            <li>{brewery.name} - {brewery.city}</li>
        :  ''} 
        </Link>
        </>
    )
}


