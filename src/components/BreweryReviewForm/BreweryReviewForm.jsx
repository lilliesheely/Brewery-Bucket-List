export default function BreweryReviewForm(){
    function handleChange() {

    }
    return(
        <form>
            <label htmlFor="">Rating</label>
            <select
                name="rating"
                onChange={handleChange}
            >
            <option value={1}>🍺 </option>
            <option value={2}>🍺 🍺 </option>
            <option value={3}>🍺 🍺 🍺 </option>
            <option value={4}>🍺 🍺 🍺 🍺</option>
            <option value={5}>🍺 🍺 🍺 🍺 🍺 </option>
            </select>
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Style</label>
            <input type="text" />
            <label htmlFor="">Review Notes</label>
            <input type="text" />
            <button>Add Beer Review</button>
        </form>
        )
}