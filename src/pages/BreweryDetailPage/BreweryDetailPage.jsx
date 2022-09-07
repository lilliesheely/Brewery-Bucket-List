import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BreweryReviewForm from '../../components/BreweryReviewForm/BreweryReviewForm'; 
import * as breweriesAPI from '../../utilities/breweries-api'

export default function BreweryDetailPage({ breweries, setBreweries }){
    const { breweryName } = useParams()
    const [reviews, setReviews] = useState([]); 
    let brewery = breweries.find(brew => brew.name === breweryName)
    
    async function handleAddReview(review){
        const breweryRev = await breweriesAPI.addReview()
        setReviews([...reviews, review])
    }
    console.log(reviews)
    async function visitedBrewery(id) {
        const visited = await breweriesAPI.updateBeenTo(id);
        const updatedList = breweries.map(b => b._id === visited._id ? visited : b)
        setBreweries(updatedList); 
      }
console.log(brewery.reviews[0], "review")
    return (
        <>
        <h1>{brewery.name}</h1> 
        <h1>{brewery.breweryType}</h1> 
        <h1>{brewery.address}</h1> 
        <h1>{brewery.city}</h1> 
        <h1>{brewery.state}</h1> 
        <BreweryReviewForm handleAddReview={handleAddReview}/> 
        <h3>Beer Reviews</h3>
        <h1>review: {brewery.reviews[0]}</h1>
       </>
    )
}