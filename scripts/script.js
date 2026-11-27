
/*
==================================================
ZONMAXSIGN - SIGN PRODUCT & QUOTE PLANNER
JAVASCRIPT PSEUDOCODE PLAN
==================================================

1. VARIABLES AND DATA

- Create an array of sign products.
- Each product should contain:
    - A unique ID
    - Product name
    - Product image
    - Product description
    - Product category
    - Available size
    - Product price

- Create an empty array for the quote items.
- Each quote item should contain:
    - Product ID
    - Quantity

- Create a variable to store the selected category.
- Set the default category to "All".
- Create a Local Storage key named "zonmaxsignQuote".


2. SELECT HTML ELEMENTS (DOM SELECTION)

- Select the product list container.
- Select all category filter buttons.
- Select the empty product results message.
- Select the quote items container.
- Select the quote item count.
- Select the total quantity display.
- Select the estimated total display.
- Select the project notes field.
- Select the clear quote button.
- Select the clear confirmation message.
- Select the confirm and cancel clear buttons.
- Select the success message.
- Select the error message.


3. STARTUP AND INITIALIZATION

- When the page loads:
    - Load the saved quote from Local Storage.
    - If saved quote data exists, restore it.
    - If no saved data exists, start with an empty quote.
    - Display all products.
    - Display the current quote.
    - Calculate the estimated total.
    - Update the quote summary.


4. DISPLAY PRODUCTS

- Create a displayProducts function.
- Clear the existing product list.
- Loop through the products array.
- Create a product card for each product.
- Display the product image, name, description,
  category, size, and price.
- Add an "Add to Quote" button to each card.
- Display the product cards on the page.


5. FILTER PRODUCTS

- Create a filterProducts function.
- Check which category the user selected.
- If the selected category is "All":
    - Display every product.
- Otherwise:
    - Only display products matching the category.
- Update the product list.
- If no products match:
    - Display the empty results message.


6. ADD PRODUCTS TO QUOTE

- Create an addToQuote function.
- When a user clicks "Add to Quote":
    - Check if the product is already in the quote.
    - If the product already exists:
        - Increase its quantity by one.
    - Otherwise:
        - Add the product to the quote.
        - Set its starting quantity to one.
- Save the updated quote to Local Storage.
- Refresh the quote display.
- Update the quote totals.
- Display a success message.


7. DISPLAY QUOTE

- Create a displayQuote function.
- Clear the existing quote display.
- Check if the quote is empty.
- If the quote is empty:
    - Display an empty quote message.
- Otherwise:
    - Loop through the quote items.
    - Find the matching product information.
    - Display the product name and price.
    - Display the current quantity.
    - Display a quantity input or control.
    - Display the product subtotal.
    - Add a remove button.
- Update the quote summary.


8. UPDATE QUANTITIES

- Create an updateQuantity function.
- Get the selected product ID and new quantity.
- Validate the quantity.
- Only accept positive whole numbers.
- If the quantity is invalid:
    - Display an error message.
    - Restore the previous valid quantity.
- Otherwise:
    - Update the selected quote item's quantity.
    - Save the updated quote.
    - Refresh the quote display.
    - Recalculate the estimated total.


9. REMOVE PRODUCTS

- Create a removeFromQuote function.
- Identify the selected product in the quote.
- Remove that product from the quote array.
- Save the updated quote.
- Refresh the quote display.
- Recalculate the estimated total.


10. CALCULATE TOTALS

- Create a calculateTotal function.
- Set the estimated total to zero.
- Loop through all quote items.
- Find each product's price.
- Multiply the product price by its quantity.
- Add each subtotal to the estimated total.
- Update the estimated total on the page.
- Update the total quantity and item count.


11. LOCAL STORAGE

- Create a saveQuote function.
- Convert the quote array into JSON.
- Save the quote data using Local Storage.

- Create a loadQuote function.
- Retrieve the saved quote data from Local Storage.
- Convert the JSON data back into an array.
- Restore the quote when the page loads.
- Handle missing or invalid saved data safely.


12. CLEAR QUOTE

- When the user clicks "Clear Quote":
    - Show a confirmation message.
    - Ask the user to confirm or cancel.

- If the user confirms:
    - Empty the quote array.
    - Remove the saved quote from Local Storage.
    - Refresh the quote display.
    - Reset all totals.
    - Display a success message.

- If the user cancels:
    - Keep the existing quote unchanged.
    - Hide the confirmation message.


13. EVENT LISTENERS

- Add click event listeners to category filter buttons.
- Add click event listeners to "Add to Quote" buttons.
- Add change event listeners to quantity controls.
- Add click event listeners to remove buttons.
- Add click event listeners to the clear quote button.
- Add click event listeners to the confirm and cancel buttons.


14. VALIDATION AND ERROR HANDLING

- Check that product IDs are valid.
- Check that quantities are positive whole numbers.
- Prevent invalid quantities from being added.
- Handle missing products safely.
- Handle empty quote data.
- Handle invalid Local Storage data.
- Display helpful error messages when necessary.


==================================================
END OF JAVASCRIPT PSEUDOCODE PLAN
==================================================
*/

/*
==================================================
ZONMAXSIGN - Javascript
==================================================
*/


// ================================================
// 1. VARIABLES AND PRODUCT DATA
// ================================================

// Store all available sign products.
const products = [
    {
        id: 1,
        name: "Clear Acrylic Sign",
        image: "images/acrylic-sign.jpg",
        description: "A clean and professional acrylic sign for businesses and storefronts.",
        category: "Acrylic",
        size: "Custom sizes available",
        price: 89
    },
    {
        id: 2,
        name: "LED Business Sign",
        image: "images/led-sign.jpg",
        description: "An illuminated LED sign designed to help your business stand out.",
        category: "LED",
        size: "Custom sizes available",
        price: 149
    },
    {
        id: 3,
        name: "Floor Display Stand",
        image: "images/floor-display.jpg",
        description: "A freestanding display sign for promotions, events, and businesses.",
        category: "Display",
        size: "Standard floor display",
        price: 129
    }
];

// Store the products selected by the user.
let quote = [];

// Store the currently selected product category.
let selectedCategory = "All";

// Local Storage key.
const storageKey = "zonmaxsignQuote";

// ================================================
// 2. DOM ELEMENT SELECTION
// ================================================

const productList = document.querySelector("#product-list");
const categoryFilters = document.querySelector(".category-filters");
const noProductsMessage = document.querySelector("#no-products");

const quoteItems = document.querySelector("#quote-items");
const itemCount = document.querySelector("#item-count");
const itemCountSummary = document.querySelector("#item-count-summary");
const totalQuantity = document.querySelector("#total-quantity");
const estimatedTotal = document.querySelector("#estimated-total");

const projectNotes = document.querySelector("#project-notes");

const clearQuoteButton = document.querySelector("#clear-quote");
const clearConfirmation = document.querySelector("#clear-confirmation");
const confirmClearButton = document.querySelector("#confirm-clear");
const cancelClearButton = document.querySelector("#cancel-clear");

const successMessage = document.querySelector("#success-message");
const errorMessage = document.querySelector("#error-message");


// ================================================
// 3. HELPER FUNCTIONS
// ================================================

// Format prices as Canadian dollars.
function formatPrice(price) {
    return new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD"
    }).format(price);
}

// Display a success message.
function showSuccess(message) {
    if (!successMessage) return;

    successMessage.textContent = message;
    successMessage.hidden = false;

    if (errorMessage) {
        errorMessage.hidden = true;
    }
}

// Display an error message.
function showError(message) {
    if (!errorMessage) return;

    errorMessage.textContent = message;
    errorMessage.hidden = false;

    if (successMessage) {
        successMessage.hidden = true;
    }
}

// Hide both feedback messages.
function hideMessages() {
    if (successMessage) {
        successMessage.hidden = true;
    }

    if (errorMessage) {
        errorMessage.hidden = true;
    }
}

// ================================================
// 4. DISPLAY PRODUCTS
// ================================================

function displayProducts(productArray = products) {

    if (!productList) return;

    // Clear the existing product cards.
    productList.innerHTML = "";

    // Show a message if there are no matching products.
    if (noProductsMessage) {
        noProductsMessage.hidden = productArray.length !== 0;
    }

    // Create a card for each product.
    productArray.forEach(product => {

        const productCard = document.createElement("article");

        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
            >

            <div class="product-card-content">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <p class="product-size">
                    <strong>Size:</strong> ${product.size}
                </p>

                <p class="product-price">
                    ${formatPrice(product.price)}
                </p>

                <button
                    type="button"
                    class="add-to-quote"
                    data-product-id="${product.id}"
                >
                    Add to Quote
                </button>

            </div>
        `;

        productList.appendChild(productCard);
    });
}


// ================================================
// 5. FILTER PRODUCTS
// ================================================

function filterProducts(category) {

    // Update the selected category.
    selectedCategory = category;

    let filteredProducts;

    // Show every product when All is selected.
    if (category === "All") {

        filteredProducts = products;

    } else {

        // Only show products matching the selected category.
        filteredProducts = products.filter(product => {
            return product.category === category;
        });
    }

    // Display the filtered products.
    displayProducts(filteredProducts);

    // Update the active filter button.
    if (categoryFilters) {

        const filterButtons = categoryFilters.querySelectorAll("[data-category]");

        filterButtons.forEach(button => {

            const isActive = button.dataset.category === category;

            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", isActive);

        });
    }
}

// ================================================
// 6. ADD PRODUCTS TO QUOTE
// ================================================

function addToQuote(productId) {

    // Find the selected product.
    const product = products.find(item => item.id === Number(productId));

    // Check whether the product exists.
    if (!product) {
        showError("Sorry, this product could not be found.");
        return;
    }

    // Check whether the product is already in the quote.
    const existingItem = quote.find(item => item.productId === product.id);

    if (existingItem) {

        // Increase the quantity if it already exists.
        existingItem.quantity++;

    } else {

        // Otherwise, add it with a starting quantity of one.
        quote.push({
            productId: product.id,
            quantity: 1
        });
    }

    // Save and refresh the quote.
    saveQuote();
    displayQuote();

    showSuccess(`${product.name} added to your quote.`);
}

// ================================================
// 7. DISPLAY QUOTE
// ================================================

function displayQuote() {

    if (!quoteItems) return;

    // Clear the current quote display.
    quoteItems.innerHTML = "";

    // Display an empty message if no products are selected.
    if (quote.length === 0) {

        quoteItems.innerHTML = `
            <p id="empty-quote">
                Your quote is currently empty. Add a product to get started.
            </p>
        `;

    } else {

        // Display every product in the quote.
        quote.forEach(item => {

            const product = products.find(product => {
                return product.id === item.productId;
            });

            // Skip any invalid product entries.
            if (!product) return;

            const subtotal = product.price * item.quantity;

            const quoteItem = document.createElement("div");

            quoteItem.classList.add("quote-item");

            quoteItem.innerHTML = `
                <div class="quote-item-header">

                    <h4>${product.name}</h4>

                    <button
                        type="button"
                        class="remove-button"
                        data-product-id="${product.id}"
                        aria-label="Remove ${product.name} from quote"
                    >
                        Remove
                    </button>

                </div>

                <p>${formatPrice(product.price)} each</p>

                <div class="quote-item-controls">

                    <label for="quantity-${product.id}">
                        Quantity:
                    </label>

                    <input
                        type="number"
                        id="quantity-${product.id}"
                        class="quantity-input"
                        data-product-id="${product.id}"
                        value="${item.quantity}"
                        min="1"
                        step="1"
                    >

                </div>

                <p class="quote-item-subtotal">
                    Subtotal: <strong>${formatPrice(subtotal)}</strong>
                </p>
            `;

            quoteItems.appendChild(quoteItem);
        });
    }

    // Update the quote summary.
    calculateTotal();
}

// ================================================
// 8. UPDATE QUANTITIES
// ================================================

function updateQuantity(productId, newQuantity) {

    const item = quote.find(item => {
        return item.productId === Number(productId);
    });

    if (!item) {
        showError("This quote item could not be found.");
        displayQuote();
        return;
    }

    // Check that the quantity is a positive whole number.
    const quantity = Number(newQuantity);

    if (!Number.isInteger(quantity) || quantity < 1) {

        showError("Please enter a valid whole number greater than zero.");

        // Restore the previous valid quantity.
        displayQuote();
        return;
    }

    // Update the selected product quantity.
    item.quantity = quantity;

    // Save and refresh the quote.
    saveQuote();
    displayQuote();

    hideMessages();
}
