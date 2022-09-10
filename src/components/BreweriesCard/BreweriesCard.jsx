import { Link } from 'react-router-dom'
import './BreweriesCard.css'
export default function BreweriesCard({ brewery }){
    return (
        <>
        <div >
            <Link 
                to={`/${brewery.name}`} 
                className='bc-link'
            > 
                {brewery.beenTo === true ?

                <table>
                    <tbody>
                        <tr>
                            <td>✔️</td>
                            <td>{brewery.name}</td>
                            <td>{brewery.city}</td>
                            <td>{brewery.state}</td>
                        </tr>
                    </tbody>
                </table>
                :  ''} 
            </Link>
            </div>
        </>
    )
}


