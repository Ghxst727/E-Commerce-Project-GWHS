// TODO: Import mongoose

// TODO: Create a user schema with the following fields:
// - firstName (String, required)
// - lastName (String, required)
// - email (String, required, unique)
// - password (String, required)
// - address:
//   - street (String, required)
//   - apartment (String, optional)
//   - city (String, required)
//   - state (String, required)
//   - zipCode (String, required)

// TODO: Create and export the User model




// TODO: Import mongoose
const mongoose = require('mongoose');

// TODO: Create a user schema with the following fields:
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Email should be unique
    },
    password: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        apartment: {
            type: String,
            optional: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipCode: {
            type: String,
            required: true
        }
    }
});

// TODO: Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
