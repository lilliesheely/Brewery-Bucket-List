import BDPReviewCard from '../../components/BDPReviewCard/BDPReviewCard';

export default function BeerReviewsList({ brewery }) {
    const allReviews = brewery.reviews.map((review, idx) => 
        <BDPReviewCard key={idx} review={review} />  )
        console.log(allReviews, 'all Reviews')
    return (
        <>
            {allReviews}
        </>
    )
}