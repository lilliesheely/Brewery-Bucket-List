import BreweriesCard from '../../components/BreweriesCard/BreweriesCard'
import './BreweriesPage.css'

export default function BreweriesPage({ breweries }){ 
    const breweryInd = breweries.map((b, idx) => (<BreweriesCard key ={idx} brewery={b} /> ))
    return (
        <>
        <div className='breweriesPage'></div>
            <h1 className='bp-h1'>Been there, drank that!</h1>
            <div className='bp-gif'></div> 
           {breweryInd}
            
        </>
    )
}