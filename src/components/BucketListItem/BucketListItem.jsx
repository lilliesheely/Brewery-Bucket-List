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
                       
                            <td className="breweriesListTable" id='bDetails'><h4>{brewery.name}</h4></td>
                            <td className="breweriesListTable">{brewery.city}, {brewery.state}</td>
                            <td>{brewery.website ? <a href={brewery.website} target="_blank" rel="noreferrer"><img src="https://i.imgur.com/H6KcSrT.png" alt="" /></a> : '' }</td>
                            <Link 
                            to={`/${brewery.name}`} 
                            className='bl-link'
                            >
                                <td className="breweriesListTable" id='brewery-details'>Brewery Deets </td>        
                            </Link>
                        <td><button  className="breweriesListTable" id='deleteBrewery' onClick={() => deleteBrewery(brewery._id)}>X</button></td>
                    </tr>
                </tbody>
                
            </table>
        </>
    )
}