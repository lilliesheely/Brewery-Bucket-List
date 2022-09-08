import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BreweryReviewForm from '../../components/BreweryReviewForm/BreweryReviewForm'; 
import * as reviewsAPI from '../../utilities/reviews-api';


export default function BreweryDetailPage({ breweries, setBreweries }){
    const { breweryName } = useParams()
    const [reviews, setReviews] = useState([]);  
    console.log(reviews, 'REVIEWS')
    let brewery = breweries.find(brew => brew.name === breweryName)

    async function handleAddReview(review) {
        const reviewTest = await reviewsAPI.addReview(brewery._id, review);
        setReviews([...reviews, reviewTest]);   
    }

    return (
        <>
        <h1>{brewery.name}</h1> 
        <h1>{brewery.breweryType}</h1> 
        <h1>{brewery.address}</h1> 
        <h1>{brewery.city}</h1> 
        <h1>{brewery.state}</h1> 
        <BreweryReviewForm  handleAddReview={handleAddReview} brewery={brewery}  /> 
        <h3>Beer Reviews</h3>
        <h1>review:</h1>
       </>
    )
}