import BreweriesList from '../../components/BreweriesList/BreweriesList';
import './BreweriesPage.css';

export default function BreweriesPage({ breweries, deleteBrewery }){ 
    const breweryInd = breweries.map((b, idx) => (<BreweriesList key ={idx} brewery={b} deleteBrewery={deleteBrewery}/> ))
    return (
        <>
        <div className='bp-container'>
            <div className='breweriesPage'></div>
            <h1 className='bp-h1'>Been there, drank that!</h1>
            <div className='bp-gif'></div> 
           {breweryInd}
        </div>
        </>
    )
}