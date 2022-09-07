const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({ 
    rating: String, 
    name: String, 
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
    reviews: [reviewSchema],
    user: {type: Schema.Types.ObjectId, ref: "User"}, 
}, {
    timestamps: true
})

module.exports = mongoose.model('Brewery', brewerySchema);
