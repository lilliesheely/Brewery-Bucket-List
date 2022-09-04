import BucketListItem from '../BucketListItem/BucketListItem'

export default function BucketListList({breweries, visitedBrewery}) {
    
    const allBreweries = breweries.map((brewery, idx) => 
        <BucketListItem key={idx} index ={idx} brewery={brewery} visitedBrewery={visitedBrewery}/> 
    )
    return (
       <li>{allBreweries}</li>
    )
}