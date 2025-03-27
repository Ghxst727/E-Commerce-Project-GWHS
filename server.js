// Add this near your other imports at the top
// TODO: Import user routes
import { userRouter } from "./users.js";
// TODO: Import required modules
// 1. Import express
import express from "express";
// 2. Import mongoose
import mongoose from "mongoose";
// 3. Import dotenv to load environment variables
import * as dotenv from "dotenv";
// TODO: Load environment variables
// Hint: Use dotenv.config()
dotenv.config();
// TODO: Initialize Express app
// Hint: const app = express();
const app = express();
const port = 3000;
// TODO: Set up middleware
// 1. Express JSON parser
app.use(express.json());
// 2. Serve static files from the 'public' directory
app.use(express.static("public"));
// Add this after your middleware setup
// TODO: Use the user routes with the path '/api'
app.use("/api", userRouter);
// TODO: Connect to MongoDB
// Hint: Use mongoose.connect with your MONGODB_URI
// Make sure to handle the connection promise with .then() and .catch()
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
// TODO: Define routes
// For now, just create a simple root route that responds with a welcome message
app.get("/", (req, res) => {
  res.json("Welcome to my app!");
});
// TODO: Start the server
// Use the PORT from your environment variables or default to 3000

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  console.log("Stopping server...");
  server.close(() => {
    console.log("Server stopped. Port released.");
    process.exit(0);
  });
});





// // TODO: Import required modules
// // 1. Import express
// const express = require('express');
// // 2. Import mongoose
// const mongoose = require('mongoose');
// // 3. Import dotenv to load environment variables
// const dotenv = require('dotenv');
// // Add this near your other imports at the top
// // TODO: Import user routes
// const userRoutes = require('./public/routes/userroutes');

// // TODO: Load environment variables
// // Hint: Use dotenv.config()
// dotenv.config();

// // TODO: Initialize Express app
// // Hint: const app = express();
// const app = express();

// // TODO: Set up middleware
// // 1. Express JSON parser
// app.use(express.json());
// // 2. Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // TODO: Connect to MongoDB
// // Hint: Use mongoose.connect with your MONGODB_URI
// // Make sure to handle the connection promise with .then() and .catch()
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log('Connected to MongoDB');
// })
// .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });

// // TODO: Use the user routes with the path '/api'
// app.use('/api', userRoutes);

// // TODO: Define routes
// // For now, just create a simple root route that responds with a welcome message
// app.get('/', (req, res) => {
//     res.send('Welcome to the E-commerce API!');
// });

// // TODO: Start the server
// // Use the PORT from your environment variables or default to 3000
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
