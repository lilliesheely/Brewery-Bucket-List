import './ReviewCard.css'
export default function ReviewCard({ review }) {
        let reviewRating; 
        if (review.rating === '1') {
            reviewRating = '🍺';
        } else if (review.rating === '2') {
            reviewRating = '🍺🍺';      
        } else if (review.rating === '3') {
            reviewRating = '🍺🍺🍺';     
        } else if (review.rating === '4' ) {
            reviewRating = '🍺🍺🍺🍺'; 
        } else if (review.rating === '5') {
            reviewRating = '🍺🍺🍺🍺🍺';
        } else { 
            reviewRating = 'No Rating'
        };
    
    
    return (
        <>
        <div className='BeerReviewCard'>
            <table className='tableReview'>
                <thead>
                    <tr className='beerReviews'>
                        <th>Rating</th>
                        <th>Name of Beer</th>
                        <th>Style of Beer</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='beerReviews'>
                        <td className='reviewTable'>{reviewRating}</td>
                        <td className='reviewTable'>{review.beerName}</td>
                        <td className='reviewTable'>{review.style}</td>
                        <td className='reviewTable'>{review.notes}</td>
                    </tr>
                </tbody>   
            </table>
        </div>
        </>
    )
}