import { useState } from 'react';

export default function BreweryReviewForm({ handleAddReview, brewery }){
    const [newReview, setNewReview] = useState ({ 
        rating: '', 
        beerName: '', 
        style: '', 
        notes: ''
    })

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddReview(newReview);
        setNewReview({
            rating: '', 
            beerName: '', 
            style: '', 
            notes: ''
          });
    }
    
    function handleChange(evt) {
        setNewReview({...newReview, [evt.target.name]: evt.target.value})
    }
 
    return(
        <form onSubmit={handleSubmit}>
            <label>Rating</label>
            <select
                name='rating'
                value={newReview.rating} 
                onChange={handleChange}
            >
            <option value={1}>🍺 </option>
            <option value={2}>🍺 🍺 </option>
            <option value={3}>🍺 🍺 🍺 </option>
            <option value={4}>🍺 🍺 🍺 🍺</option>
            <option value={5}>🍺 🍺 🍺 🍺 🍺 </option>
            </select>
            <label >Name</label>
            <input 
                type='text' 
                value={newReview.name} 
                name='beerName'
                onChange={handleChange}
            />
            <label>Style</label>
            <input 
                type='text'
                value={newReview.style} 
                name='style'
                onChange={handleChange}
            />
            <label>Review Notes</label>
            <input 
                type='text'
                value={newReview.notes}
                name='notes'
                onChange={handleChange}
            />
            <button type='submit'>Add Beer Review</button>
        </form>
    )
}