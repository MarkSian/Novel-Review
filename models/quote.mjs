import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    characterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character',
        required: true
    },
    episodeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode',
        required: true
    },
    quoteText: {
        type: String,
        required: true,
        minlength: 5
    },
    isProfane: {
        type: Boolean,
        default: false
    }
});

quoteSchema.index({ characterId: 1, isProfane: 1 });
export default mongoose.model('Quote', quoteSchema);