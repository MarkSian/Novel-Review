import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config(); // Load environment variables from .env file so we can access the MONGO_URI

const connectionString = process.env.MONGO_URI; // Get the MongoDB connection string from the environment variables

async function connectDB() {
    try {
        await mongoose.connect(connectionString); // Connect to the MongoDB database using the connection string
        console.log('MongoDB connected successfully'); // Log a success message if the connection is successful
    } catch (err) {
        console.error(err);
    }
}


export default connectDB;