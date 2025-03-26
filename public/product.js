// TODO: Import mongoose

// In your product page JavaScript:

// TODO: Fetch products from API instead of using hard-coded data
// 1. Use fetch() to call your API endpoint
// 2. Convert the response to JSON
// 3. Use the returned data to populate your product grid

// TODO: Update "Add to Cart" functionality to work with API
// 1. When a product is added to cart, send the data to your cart API
// 2. Update the cart UI based on the API response

// TODO: Create product schema with:
// - name (String, required)
// - price (Number, required)
// - description (String, required)
// - image (String, required)
// - category (String)

// TODO: Create and export the Product model



// TODO: Fetch products from API instead of using hard-coded data

document.addEventListener('DOMContentLoaded', function () {
    fetchProducts();
    setupCartListener();
});

// Fetch products from the API and populate the product grid
async function fetchProducts() {
    try {
        const response = await fetch('https://your-api-endpoint.com/products'); // Replace with your actual API URL
        const products = await response.json();

        if (response.ok) {
            populateProductGrid(products);
        } else {
            alert('Failed to load products');
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        alert('There was an error loading the products.');
    }
}

// Function to populate product grid with data from the API
function populateProductGrid(products) {
    const productGrid = document.getElementById('productGrid'); // Assuming your grid has this ID
    productGrid.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button class="addToCart" data-product-id="${product._id}">Add to Cart</button>
        `;

        productGrid.appendChild(productElement);
    });
}

// TODO: Update "Add to Cart" functionality to work with API

// Function to handle adding a product to the cart
async function addToCart(productId) {
    try {
        const response = await fetch('https://your-api-endpoint.com/cart', { // Replace with your cart API URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId })
        });

        if (response.ok) {
            const cartData = await response.json();
            updateCartUI(cartData); // Update the cart UI based on the API response
        } else {
            alert('Failed to add product to cart');
        }
    } catch (error) {
        console.error('Error adding product to cart:', error);
        alert('There was an error adding the product to your cart.');
    }
}

// Function to update the cart UI (this could be a sidebar, a cart icon, etc.)
function updateCartUI(cartData) {
    const cartCount = document.getElementById('cartCount'); // Assuming an element with this ID shows the cart count
    cartCount.textContent = cartData.items.length; // Update the cart count with the number of items in the cart
}

// Set up event listener for the "Add to Cart" buttons
function setupCartListener() {
    document.getElementById('productGrid').addEventListener('click', function (event) {
        if (event.target.classList.contains('addToCart')) {
            const productId = event.target.getAttribute('data-product-id');
            addToCart(productId);
        }
    });
}
