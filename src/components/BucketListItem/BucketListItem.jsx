import { Link } from "react-router-dom";
import './BucketListItem.css'
export default function BucketListItem({ brewery, visitedBrewery, deleteBrewery }) {
    if (brewery.beenTo === false ) 
 
    return (
        <>
            <table >
                <tbody>
                    <tr className="bll-table">
                        <td><button id='bll-btn' className="breweriesListTable" onClick={() => visitedBrewery(brewery._id)}></button></td>
                       
                            <td className="breweriesListTable"><h4>{brewery.name}</h4></td>
                            <td className="breweriesListTable">{brewery.city}</td>
                            <td className="breweriesListTable">{brewery.state}</td>
                            <Link 
                            to={`/${brewery.name}`} 
                            className='bl-link'
                            >
                                <td className="breweriesListTable">Brewery Details </td>        
                            </Link>
                        <td><button  className="breweriesListTable" id='deleteBrewery' onClick={() => deleteBrewery(brewery._id)}>❌</button></td>
                    </tr>
                </tbody>
                
            </table>
        </>
    )
}