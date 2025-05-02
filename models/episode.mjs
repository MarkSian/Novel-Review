import mongoose from 'mongoose';

const episodeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    season: {
        type: Number,
        required: true,
        min: 1
    },
    episodeNumber: {
        type: Number,
        required: true,
        min: 1
    },
    airDate: {
        type: Date,
        required: true
    },
    mainCharacters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }]
});

episodeSchema.index({ season: 1 });
export default mongoose.model('Episode', episodeSchema);