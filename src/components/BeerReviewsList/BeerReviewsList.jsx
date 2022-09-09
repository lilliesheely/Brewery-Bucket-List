import BeerReviewCard from '../../components/BeerReviewCard/BeerReviewCard'
export default function BeerReviewsList({ breweries }) {
    const brew = breweries.map((b, idx) => (
        <BeerReviewCard key={idx} brewery={b} /> 
    ))
    return (
        <>
        {brew}
        </>
    )
}