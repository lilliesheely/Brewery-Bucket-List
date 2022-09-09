import ReviewCard from '../ReviewCard/ReviewCard'
export default function BeerReviewCard({ brewery }) {   
    const allReviews = brewery.reviews.map((review, idx) => 
     <ReviewCard key={idx} review={review} />  
    )
    
    return (
        <>
            <h1>Reviews: </h1>  
            <h3>{allReviews}</h3>
        </>
    )
}
