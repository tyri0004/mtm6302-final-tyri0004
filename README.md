# mtm6302-final-tyri0004

# Project Title: ZonMaxSign Sign Product & Quote Planner 

1. Project Identity and Purpose 
ZonMaxSign is a sign and display product business that provides different types of signs for businesses, shops, and events. The Sign Product & Quote Planner is designed for small business owners, shop owners, and people who need signs for their businesses or events. The purpose of this application is to help customers explore available sign products, compare prices, and create a personal quote list before contacting the business. Users should be able to find suitable products, choose the quantity they need, and see the estimated total price in one place. 



# Psuedo code: 

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

