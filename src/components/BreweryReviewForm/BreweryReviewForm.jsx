import { useState } from 'react';

export default function BreweryReviewForm({ handleAddReview }){
    const [newReview, setNewReview] = useState ({ 
        rating: '', 
        name: '', 
        style: '', 
        notes: ''
    })
    
    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddReview(newReview);
        setNewReview({
            rating: '', 
            name: '', 
            style: '', 
            notes: ''
          });
    }
    
    function handleChange(evt) {
        setNewReview({...newReview, [evt.target.name]: evt.target.value})
    }
   
    return(
        <form onSubmit={() => handleSubmit()}>
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
                name='name'
                onChange={handleChange}
                value={newReview.name} 
            />
            <label>Style</label>
            <input 
                type='text'
                name='style'
                onChange={handleChange}
                value={newReview.style} 
            />
            <label>Review Notes</label>
            <input 
                type='text'
                name='notes'
                onChange={handleChange}
                value={newReview.notes}
            />
            <button type='submit'>Add Beer Review</button>
        </form>
    )
}