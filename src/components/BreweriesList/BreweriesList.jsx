import { Link } from 'react-router-dom';
import './BreweriesList.css';

export default function BreweriesList({ brewery, deleteBrewery }){
  
    return (
        <>
            <div className='breweriesCardCom' >
                {brewery.beenTo === true ?
                    <table>
                        <tbody>
                            <tr className='breweriesCard'>
                                <td className='breweriesTable'><img src='https://i.imgur.com/iazwr0w.png' alt='beer icon' /></td>
                                <td className='breweriesTable' id='bDetails'><b>{brewery.name}</b></td>
                                <td className='breweriesTable'>{brewery.city}, {brewery.state}</td>
                                <Link 
                                    to={`/${brewery.name}`} 
                                    className='bc-link'
                                >
                                    <td className='breweriesTable' id='brewery-details' >Brewery<br />Deets</td>   
                                </Link>
                                <td><button  className='breweriesTable' id='deleteBrewery' onClick={() => deleteBrewery(brewery._id)}>X</button></td>
                            </tr>
                        </tbody>
                    </table>
                :  ''} 
            </div>
        </>
    )
}


