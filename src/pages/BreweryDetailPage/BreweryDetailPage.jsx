import { useParams } from 'react-router-dom';
import BreweryReviewForm from '../../components/BreweryReviewForm/BreweryReviewForm'; 

export default function BreweryDetailPage({ breweries }){
    console.log(breweries, 'DetailPage-Breweries')
    const { breweryName } = useParams()
    
    let brewery = breweries.find(brew => brew.name === breweryName)
    console.log(brewery, 'DetailPage Brewery')
    return (
        <>
        <h1>{brewery.name}</h1> 
        <h1>{brewery.breweryType}</h1> 
        <h1>{brewery.address}</h1> 
        <h1>{brewery.city}</h1> 
        <h1>{brewery.state}</h1> 
        <BreweryReviewForm /> 
       </>
    )
}