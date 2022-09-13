import { useParams } from 'react-router-dom';
import BDPReviewForm from '../../components/BDPReviewForm/BDPReviewForm'; 
import BDPReviewsList from '../../components/BDPReviewsList/BDPReviewsList'; 
import * as reviewsAPI from '../../utilities/reviews-api';
import './BreweryDetailPage.css';

export default function BreweryDetailPage({ breweries, setBreweries }){
    const { breweryName } = useParams()
    if (!breweries.length) return null;
    let brewery = breweries.find(brew => brew.name === breweryName)
    
    
    async function handleAddReview(review) {
        const newReview = await reviewsAPI.addReview(brewery._id, review);
        const findReviews = breweries.map(b => b._id === newReview._id ? newReview : b)
        setBreweries(findReviews);   
    }
    let breweryMap = breweries.map((b, idx) => ( <BDPReviewsList key={idx} brewery={b} /> ))

    return (
        <>
        <section className='BreweryDetailPage'>
            <div className='bdp'>
                <h1 className='dp-h1'>{brewery.name}</h1> 
                <p className='bdp-ptag'><i>{brewery.breweryType}</i></p> 
                <p className='bdp-ptag'>{brewery.address}</p> 
                <p className='bdp-ptag'>{brewery.city}, {brewery.state}</p> 
                {brewery.website ? <a href={brewery.website} target='_blank' rel='noreferrer'>
                    <img src='https://i.imgur.com/oQiXwLh.png' alt='logo' />
                    </a> : 'no website found :( '}
                <BDPReviewForm  handleAddReview={handleAddReview} /> 
                {breweryMap}
            </div>
        </section>
       </>
    )
}