import BucketListItem from '../BucketListItem/BucketListItem'

export default function BucketListList({ breweries, visitedBrewery, deleteBrewery }) {
    const allBreweries = breweries.map((brewery, idx) => 
        <BucketListItem key={idx} index ={idx} brewery={brewery} visitedBrewery={visitedBrewery} deleteBrewery={deleteBrewery}/> 
    )

    return (
        <>
            <h2 className='bl-h2'>Bucket List</h2>
            {allBreweries}
        </>
    )
}