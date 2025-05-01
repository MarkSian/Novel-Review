import express from 'express';
import dotenv from 'dotenv';

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Error handling
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});


// Listeners
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});