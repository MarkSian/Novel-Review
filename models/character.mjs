import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
        trim: true,
        maxlength: 50
    },
    age: {
        type: Number,
        min: [0, "Age cannot be negative"],
        max: [150, "Age cannot exceed 150"]
    },
    occupation: {
        type: String,
        default: "Student"
    },
    traits: {
        type: [String],
        validate: v => v.length > 0
    },
    firstAppearance: {
        type: String,
        match: [/^S\d{2}E\d{2}$/, "Format: S##E##"]
    }
});

characterSchema.index({ name: 1, traits: 1 });
export default mongoose.model('Character', characterSchema);