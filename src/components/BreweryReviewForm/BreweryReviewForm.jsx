import { useState } from 'react'; 
import './BreweryReviewForm.css'

export default function BreweryReviewForm({ handleAddReview }){
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
        <div className='brfPage'>
        <form className='reviewForm' onSubmit={handleSubmit} >
            <label className='reviewFormLabel'>Rating</label>
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
            <label className='reviewFormLabel'>Name of Beer</label>
            <input 
                type='text' 
                value={newReview.beerName} 
                name='beerName'
                onChange={handleChange}
                className='reviewForminput'
            />
            <label className='reviewFormLabel'>Style</label>
            <input 
                type='text'
                value={newReview.style} 
                name='style'
                onChange={handleChange}
                className='reviewForminput'
            />
            <label className='reviewFormLabel'>Review</label>
            <input 
                type='text'
                value={newReview.notes}
                name='notes'
                onChange={handleChange}
                className='reviewForminput'
            /> 
            <button type='submit' className='brf-btn'>Add Beer Review</button>
        </form>
        </div>
    )
}