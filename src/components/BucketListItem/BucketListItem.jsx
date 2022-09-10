import { Link } from "react-router-dom";
import './BucketListItem.css'
export default function BucketListItem({ brewery, visitedBrewery, deleteBrewery }) {
    if (brewery.beenTo === false ) 
    return (
        <>
            <table >
                <tbody>
                    <tr className="bll-table">
                        <td><button className='bll-btn' onClick={() => visitedBrewery(brewery._id)}></button></td>
                        <td>{brewery.name}</td>
                        <td>{brewery.city}</td>
                        <td>{brewery.state}</td>
                        <td><button onClick={() => deleteBrewery(brewery._id)}>❌</button></td>
                    </tr>
                </tbody>
                
            </table>
        </>
    )
}