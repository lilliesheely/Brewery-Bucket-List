import { Link } from 'react-router-dom'
import './BreweriesCard.css'
export default function BreweriesCard({ brewery }){
    return (
        <>
            <div className='breweriesCardCom' >
                {brewery.beenTo === true ?
                    <table>
                        <tbody>
                            <tr className='breweriesCard'>
                                
                                <td className='breweriesTable'><img src="https://i.imgur.com/iazwr0w.png" alt="" /></td>
                                <td className='breweriesTable'><b>{brewery.name}</b></td>
                                <td className='breweriesTable'>{brewery.city}, {brewery.state}</td>
                                <Link 
                                    to={`/${brewery.name}`} 
                                    className='bc-link'
                                >
                                    <td className='breweriesTable' id='bDetails'>Brewery<br />Details</td>   
                                </Link>
                                
                            </tr>
                        </tbody>
                    </table>
                :  ''} 
            </div>
        </>
    )
}


