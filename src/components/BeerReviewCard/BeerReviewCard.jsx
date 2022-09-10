import ReviewCard from '../ReviewCard/ReviewCard'
export default function BeerReviewCard({ brewery }) {   
    const allReviews = brewery.reviews.map((review, idx) => 
     <ReviewCard key={idx} review={review} />  )
    
    return (
        <>
            {allReviews}
        </>
    )
}
