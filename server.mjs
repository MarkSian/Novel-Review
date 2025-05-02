import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import kidRoute from './routes/criticRoute.mjs';
import authorRoute from './routes/authorRoute.mjs';
import novelRoute from './routes/novelRoute.mjs';
import seedingRoute from './routes/seedingRoute.mjs'


// Setup: Here we import the necessary modules. express() is a web framework for Node.js, and dotenv is used to load environment variables from the .evn file. Such as PORT and our DB_URI.
dotenv.config(); // dotenv.config() allows us to use the variables from the .env file
const app = express(); // express() creates an instance of the express application, allowing us to define routes, middleware, and other configurations
const PORT = process.env.PORT || 3001; // PORT is set to the value of the PORT within the .env file.


// Middleware: Middleware functions serve as a bridge between the request and response cycle. They can modify the request, perform actions, or end the request-response cycle.
app.use(express.json()); // app.use(express.json()) allows us to parse incoming request bodies in a JSON format, making it easier to work with JSON data in our application.
app.use(express.urlencoded({ extended: true })); // app.use(express.urlencoded({ extended: true })) allows us to parse incoming request bodies in the URL-encoded format, which is commonly used for form submissions. 
// extended:true allows for the parsing of more complex objects, while false can only parse simple objects. Complex such as nested objects.
connectDB(); // connectDB() is a function that connects to the MongoDB database.

// Routes
app.use('/seed', seedingRoute);
app.use('/api/novel', novelRoute);
app.use('/api/kids', kidRoute);
app.use('/api/authors', authorRoute);



// Error handling: This is MIDDLEWARE that handles errors that occur in the application. It takes four args: err, req, res, and next. 
// err is the error object, req is the request object, res is the response object, and next is a function that passes control to the next middleware function.
app.use((err, req, res, next) => { // when an error occurs, err is passed to this function, then the res parameter is used to send a response back to the client.
    res.status(500).json({ error: err.message });
    console.error(err); // console logs the error message by using the error object passed to tthe function.
});


// Listener
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`)
});