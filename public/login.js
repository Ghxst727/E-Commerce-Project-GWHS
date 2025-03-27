// TODO: When the DOM loads, set up event listeners for the login form

// TODO: Create a function to handle the login form submission
// 1. Prevent the default form submission
// 2. Gather email and password data
// 3. Send the data to your API using fetch() with POST method
// 4. Handle the response:
//    - If successful, store user data in localStorage and redirect to home page
//    - If error, display appropriate error message to user


// // When the DOM loads, set up event listeners for the login form
//         document.addEventListener('DOMContentLoaded', function () {
//             const form = document.getElementById('loginForm');
            
//             form.addEventListener('submit', handleLoginFormSubmit);
//         });

//         // Function to handle the login form submission
//         async function handleLoginFormSubmit(event) {
//             event.preventDefault(); // Prevent the default form submission

//             // Gather email and password data
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;

//             // Prepare the data to send to the API
//             const userData = {
//                 email: email,
//                 password: password
//             };

//             try {
//                 // Send the data to your API using fetch() with POST method
//                 const response = await fetch('https://your-api-endpoint.com/login', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(userData)
//                 });

//                 // Handle the response
//                 if (response.ok) {
//                     // If successful, store user data in localStorage
//                     const data = await response.json();
//                     localStorage.setItem('userData', JSON.stringify(data));

//                     // Redirect to the home page (or any other page)
//                     window.location.href = '/home';
//                 } else {
//                     // If error, display an error message to the user
//                     const errorData = await response.json();
//                     alert('Error: ' + errorData.message);
//                 }
//             } catch (error) {
//                 // Handle network or other errors
//                 alert('An error occurred: ' + error.message);
//             }
//         }