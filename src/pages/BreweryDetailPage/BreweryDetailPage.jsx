import { useParams } from "react-router-dom";

export default function BreweryDetailPage(){
    const { breweryName } = useParams()
    return (
        <>
        <h1> {breweryName}</h1>
       <h1>test</h1> 
       </>
    )
}