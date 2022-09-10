import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BreweryReviewForm from '../../components/BreweryReviewForm/BreweryReviewForm'; 
import BeerReviewsList from '../../components/BeerReviewsList/BeerReviewsList'; 
import * as reviewsAPI from '../../utilities/reviews-api';

export default function BreweryDetailPage({ breweries, setBreweries }){
    const { breweryName } = useParams()
    //TODO: do i need this?
    const [reviews, setReviews] = useState([]);  
    let brewery = breweries.find(brew => brew.name === breweryName)

    async function handleAddReview(review) {
        const newReview = await reviewsAPI.addReview(brewery._id, review);
        const findReviews = breweries.map(b => b._id === newReview._id ? newReview : b)
        setBreweries(findReviews);   
    }

    return (
        <>
        <h1>{brewery.name}</h1> 
        <hp><i>{brewery.breweryType}</i></hp> 
        <p>{brewery.address}</p> 
        <p>{brewery.city}, {brewery.state}</p> 
        <BreweryReviewForm  handleAddReview={handleAddReview}   /> 
        <BeerReviewsList breweries={breweries} /> 
       </>
    )
}