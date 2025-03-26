// TODO: When the DOM loads, set up event listeners for the registration form

// TODO: Create a function to handle the registration form submission
// 1. Prevent the default form submission
// 2. Gather all form data into an object
// 3. Validate form data (all required fields, email format, etc.)
// 4. Send the data to your API using fetch() with POST method
// 5. Handle the response:
//    - If successful, store user data in localStorage and redirect to home page
//    - If error, display appropriate error message to user

// TODO: Create helper functions for form validation



// TODO: When the DOM loads, set up event listeners for the registration form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', handleRegisterFormSubmit);
});

// TODO: Create a function to handle the registration form submission
async function handleRegisterFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather all form data into an object
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value.trim(),
        streetAddress: document.getElementById('streetAddress').value.trim(),
        apartment: document.getElementById('apartment').value.trim(),
        city: document.getElementById('city').value.trim(),
        state: document.getElementById('state').value.trim(),
        zipCode: document.getElementById('zipCode').value.trim()
    };

    // TODO: Validate form data (all required fields, email format, etc.)
    if (!validateFormData(formData)) {
        return;
    }

    try {
        // TODO: Send the data to your API using fetch() with POST method
        const response = await fetch('https://your-api-endpoint.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // TODO: Handle the response
        if (response.ok) {
            // If successful, store user data in localStorage
            const data = await response.json();
            localStorage.setItem('userData', JSON.stringify(data));

            // Redirect to the home page (or any other page)
            window.location.href = '/home';
        } else {
            // If error, display appropriate error message to user
            const errorData = await response.json();
            alert('Error: ' + errorData.message);
        }
    } catch (error) {
        // Handle network or other errors
        alert('An error occurred: ' + error.message);
    }
}

// TODO: Create helper functions for form validation
function validateFormData(formData) {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.streetAddress || !formData.city || !formData.state || !formData.zipCode) {
        alert('Please fill in all required fields.');
        return false;
    }

    if (!isValidEmail(formData.email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (formData.password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    if (!isValidZipCode(formData.zipCode)) {
        alert('Please enter a valid zip code.');
        return false;
    }

    return true;
}

// Email format validation
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Zip Code format validation (simple 5-digit check)
function isValidZipCode(zipCode) {
    const zipPattern = /^\d{5}$/;
    return zipPattern.test(zipCode);
}
