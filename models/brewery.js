const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({ 
    rating: String, 
    beerName: String, 
    style: String, 
    notes: String
})

const brewerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breweryType: String, 
    address: String,
    city: String,
    state: String,
    beenTo: { 
        type: Boolean, 
        default: false 
    },
    website: String, 
    reviews: [reviewSchema],
    user: {type: Schema.Types.ObjectId, ref: "User"}, 
}, {
    timestamps: true
})

brewerySchema.methods.addReviewToBrewery = async function(reviewId) {
    const brewRev = this;
    const brewery = await Brewery.findById(reviewId); 
    const newReview = { review }
    brewery.reviews.push(newReview);
    return brewery.save();
  };

module.exports = mongoose.model('Brewery', brewerySchema);
