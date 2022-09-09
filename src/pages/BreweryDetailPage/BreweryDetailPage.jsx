import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BreweryReviewForm from '../../components/BreweryReviewForm/BreweryReviewForm'; 
import BeerReviewsList from '../../components/BeerReviewsList/BeerReviewsList'; 
import * as reviewsAPI from '../../utilities/reviews-api';


export default function BreweryDetailPage({ breweries, setBreweries }){
    const { breweryName } = useParams()
    const [reviews, setReviews] = useState([]);  
    console.log(reviews, 'REVIEWS')
    let brewery = breweries.find(brew => brew.name === breweryName)

    async function handleAddReview(review) {
        const reviewTest = await reviewsAPI.addReview(brewery._id, review);
        const updatedBrewrey = reviews.map(r => r._id === reviewTest._id ? reviewTest._id : r)
        setReviews(updatedBrewrey);   
    }

    // async function visitedBrewery(id) {
    //     const visited = await breweriesAPI.updateBeenTo(id);
    //     const updatedList = breweries.map(b => b._id === visited._id ? visited : b)
    //     setBreweries(updatedList); 


    return (
        <>
        <h1>{brewery.name}</h1> 
        <h1>{brewery.breweryType}</h1> 
        <h1>{brewery.address}</h1> 
        <h1>{brewery.city}</h1> 
        <h1>{brewery.state}</h1> 
        <BreweryReviewForm  handleAddReview={handleAddReview} brewery={brewery}  /> 
        <BeerReviewsList breweries={breweries} /> 
       </>
    )
}