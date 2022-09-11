import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BreweryReviewForm from '../../components/BreweryReviewForm/BreweryReviewForm'; 
import BeerReviewsList from '../../components/BeerReviewsList/BeerReviewsList'; 
import * as reviewsAPI from '../../utilities/reviews-api';
import './BreweryDetailPage.css'

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
        <section className='BreweryDetailPage'>
            <div className='bdp'>
                <h1 className='dp-h1'>{brewery.name}</h1> 
                <p className='bdp-ptag'><i>{brewery.breweryType}</i></p> 
                <p className='bdp-ptag'>{brewery.address}</p> 
                <p className='bdp-ptag'>{brewery.city}, {brewery.state}</p> 
                {brewery.website ? <a href={brewery.website} target='_blank'>Website</a> : ''}
                <BreweryReviewForm  handleAddReview={handleAddReview} /> 
                <table>
                    <thead>
                        <tr className='bdp-table'>
                            <th className='bdp-row'>Rating</th>
                            <th>Name of Beer</th>
                            <th>Style</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                </table>
                <BeerReviewsList breweries={breweries} /> 
            </div>
        </section>
       </>
    )
}