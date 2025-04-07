const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Trip name is required"],
    },
    location: {
        type: String,
        required: [true, "Location is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    bestTimeToVisit: {
        type: String,
        required: [true, "Best time to visit is required"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: [
            "Culture", "Nature", "Historical", "Adventure", "Religious", "Beaches", 
            "Villages & Traditions", "Architecture", "Wine & Culinary", "Spa & Wellness"
        ]
    },
    image: {
        type: String,
        required: [true, "Image URL is required"],
    },
    price: {
        type: String,
        required: [true, "Price/Entrance Fee is required"],
    },
    // author: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'User',
    //     required: true 
    //   }
}, 
{ timestamps: true });

module.exports = mongoose.model("Trip", tripSchema);