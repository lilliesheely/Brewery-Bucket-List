export default function ReviewCard({ review }) {
    return (
        <>
        <div>
            <h3>{review.rating}</h3>
            <h3>{review.beerName}</h3>
            <h3>{review.style}</h3>
            <h3>{review.notes}</h3>
        </div>
        </>
    )
}