import * as breweriesAPI from '../../utilities/breweries-api'
import BreweriesCard from '../../components/BreweriesCard/BreweriesCard'
export default function BreweriesPage({ breweries, setBreweries }){ 
    const breweryInd = breweries.map((b, idx) => (<BreweriesCard key ={idx} brewery={b} /> ))
    return (
        <>
            <h1>Been there, drank that!</h1>
            {breweryInd}
        </>
    )
}