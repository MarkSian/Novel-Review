import mongoose from "mongoose";

const novelSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, 'title is required']
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    genre: {
        type: String,
        required: [true, 'Genre must be one of the following: Fiction', 'Non-Fiction', 'Fantasy', 'Science Fiction', 'Classic', 'Mystery', 'Adventure', 'Educational', 'Fairy Tale'],
        enum: {
            values: ['Fiction', 'Non-Fiction', 'Fantasy', 'Science Fiction', 'Classic', 'Mystery', 'Adventure', 'Educational', 'Fairy Tale']
        }

    },
    rating: {
        type: Number,
        min: [1, 'Rating must be between 1 and 10'],
        max: [10, 'Rating must be between 1 and 10'],
        default: 0
    },
    summary: String
})

novelSchema.index({ genre: 1 });

export default mongoose.model('Novel', novelSchema);