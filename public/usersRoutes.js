// TODO: Import express and your User model
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user'); // Adjust the path as needed
const router = express.Router();

// TODO: Create POST route for user registration (/api/users/register)
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, address } = req.body;

    try {
        // 1. Check if a user with the given email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // 2. If not, create a new user with the request body data
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            address
        });

        // Save the new user to the database
        await newUser.save();

        // 3. Return the new user (without the password) with status 201
        const { password: _, ...userWithoutPassword } = newUser.toObject(); // Remove password from response
        res.status(201).json(userWithoutPassword);

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error while registering user' });
    }
});

// TODO: Create POST route for user login (/api/users/login)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // 2. Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // 3. If authentication is successful, return user info (without password)
        const { password: _, ...userWithoutPassword } = user.toObject(); // Remove password from response
        res.status(200).json(userWithoutPassword);

    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Server error while logging in user' });
    }
});

// TODO: Export the router
module.exports = router;
