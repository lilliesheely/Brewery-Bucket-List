const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: String, 
    address: String,
    city: String,
    state: String,
    beenTo: { 
        type: Boolean, 
        default: false 
    },
    user: {type: Schema.Types.ObjectId, ref: "User"}, 
}, {
    timestamps: true
})

module.exports = mongoose.model('Brewery', brewerySchema);
