import './BDPReviewCard.css';

export default function BDPReviewCard({ review }) {
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
        }
        console.log(review, 'single review')
    return (
        <>
        <div className='BeerReviewCard'>
            <table className='tableReview'>
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