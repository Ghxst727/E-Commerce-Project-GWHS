// TODO: Import required modules
// 1. Import express
// 2. Import mongoose
// 3. Import dotenv to load environment variables
// Add this near your other imports at the top
// TODO: Import user routes

// Add this after your middleware setup
// TODO: Use the user routes with the path '/api'



// TODO: Load environment variables
// Hint: Use dotenv.config()

// TODO: Initialize Express app
// Hint: const app = express();

// TODO: Set up middleware
// 1. Express JSON parser 
// 2. Serve static files from the 'public' directory

// TODO: Connect to MongoDB
// Hint: Use mongoose.connect with your MONGODB_URI
// Make sure to handle the connection promise with .then() and .catch()

// TODO: Define routes
// For now, just create a simple root route that responds with a welcome message

// TODO: Start the server
// Use the PORT from your environment variables or default to 3000




// TODO: Import required modules
// 1. Import express
const express = require('express');
// 2. Import mongoose
const mongoose = require('mongoose');
// 3. Import dotenv to load environment variables
const dotenv = require('dotenv');
// Add this near your other imports at the top
// TODO: Import user routes
const userRoutes = require('./public/routes/userroutes');

// TODO: Load environment variables
// Hint: Use dotenv.config()
dotenv.config();

// TODO: Initialize Express app
// Hint: const app = express();
const app = express();

// TODO: Set up middleware
// 1. Express JSON parser 
app.use(express.json());
// 2. Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// TODO: Connect to MongoDB
// Hint: Use mongoose.connect with your MONGODB_URI
// Make sure to handle the connection promise with .then() and .catch()
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// TODO: Use the user routes with the path '/api'
app.use('/api', userRoutes);

// TODO: Define routes
// For now, just create a simple root route that responds with a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce API!');
});

// TODO: Start the server
// Use the PORT from your environment variables or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
