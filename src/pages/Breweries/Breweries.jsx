import BreweriesCard from '../../components/BreweriesCard/BreweriesCard'
export default function Breweries({breweries}){ 
    const brewery = breweries.map((b) => (<BreweriesCard key ={b} brewery={b} /> ))
    return (
        <>
            <h1>Been there, drank that!</h1>
            {brewery}
        </>
    )
}