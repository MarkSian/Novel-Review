import mongoose from "mongoose";

const criticSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    favoriteGenres: {
        type: [String],
        required: true
    },
    reviews: String
})

export default mongoose.model('Critic', criticSchema);