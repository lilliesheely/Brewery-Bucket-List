export default function ReviewCard({ review }) {
    return (
        <>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>{review.rating}</td>
                        <td>{review.beerName}</td>
                        <td>{review.style}</td>
                        <td>{review.notes}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}