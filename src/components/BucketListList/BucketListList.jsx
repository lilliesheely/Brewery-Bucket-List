import BucketListItem from '../BucketListItem/BucketListItem'
export default function BucketListList({breweries}) {
    const allBreweries = breweries.map((brewery, idx) => 
        <BucketListItem key={idx} brewery={brewery}/> 
    )
    return (
       <div>{allBreweries}</div>
    )
}