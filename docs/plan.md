# MTM6302 – Milestone 2: Application Plan and Architecture

**Project Name:** ZonMaxSign – Sign Product & Quote Planner  
**Developer:** Sam Tyrie  


---

## 1. Understanding Requirements 

### Project Overview

ZonMaxSign is a sign and display product business. The application will allow customers to browse available signage products, filter products by category, and create a quote list.

The goal is to make it easier for customers to select products, adjust quantities, and calculate an estimated total price before contacting the business.

### Target Users
- Small business owners.
- Shop owners.
- People looking for signs for businesses or events.

### Required Features

| ID | Feature | Description |
|---|---|---|
| F1 | Browse Products | View products, images, descriptions, sizes, categories, and prices. |
| F2 | Filter Products | Filter products by Acrylic, LED, Display, or view all. |
| F3 | Add to Quote | Add products to a quote list with a default quantity of 1. |
| F4 | Manage Quote | Change quantities, remove products, and calculate totals. |
| F5 | Save Quote | Save the quote list using Local Storage. |

### Questions and Assumptions

The client has provided sample products, prices, categories, and design preferences.

**Assumptions:**
- Product information will be stored in a JavaScript array.
- Product prices will remain fixed sample prices.
- Local Storage will be used to save the quote list.
- Customers will not need an account.
- The application will not process real orders or payments.

**Clarification questions:**
- Are additional products expected beyond the three sample products?
- Should project notes also be saved after refreshing the page?

If the client does not respond within the required clarification period, reasonable decisions will be documented.

## 2. Defining Scope

### Required Features
- F1: Display a product catalogue.
- F2: Filter products by category.
- F3: Add products to a quote list.
- F4: Update quantities, remove products, and calculate totals.
- F5: Save and restore the quote list using Local Storage.

### Optional Features
- Search products by name.
- Add a project notes text area.

### Out of Scope
- Customer accounts.
- Online payments.
- Real-time ordering.
- Delivery tracking.
- Admin dashboard.

### Dependencies

The product catalogue must be created before filtering and adding products can work.

The quote list must be functional before calculating totals and saving selections.

Local Storage depends on the quote list data being properly organized.

## 3. Planning the Interface

The application will have two main layouts: desktop and mobile.



### Interface States

| State | What the User Sees |
|---|---|
| Initial | Product catalogue and empty quote list. |
| Empty | "Your quote list is empty. Start by exploring our products." |
| Success | Confirmation message when a product is added. |
| Error | Helpful message if an action cannot be completed. |
| No Results | "No products found in this category." |
| Clear Confirmation | Confirmation prompt before clearing the quote list. |

**User interactions:**
- Clicking a category updates the product catalogue.
- Clicking Add to Quote adds a product and displays confirmation.
- Clicking + or - changes the quantity and updates the total.
- Clicking Remove deletes a product.
- Clicking Clear Quote List asks for confirmation.

Feedback messages will appear near the relevant section.

## 4. Planning Data and State

The application will use JavaScript arrays and objects to store product information and customer selections.

### Product Data

Each product will contain:
- ID
- Name
- Image
- Description
- Category
- Size
- Price

**Sample product object:**

```javascript
const product = {
  id: 1,
  name: "Clear Acrylic Sign",
  image: "images/acrylic-sign.jpg",
  description: "A modern acrylic sign for businesses.",
  category: "Acrylic",
  size: "Medium",
  price: 89
};
```

### Quote List Data

The quote list will store selected products and their quantities.

```javascript
const quoteList = [
  {
    productId: 1,
    quantity: 2
  }
];
```

The product ID will connect each quote item to its information in the product catalogue.

### Initial Values

- Products: An array containing the available products.
- Quote List: An empty array.
- Selected Category: "All".
- Search Input: Empty (if optional search is implemented).

### Calculated Values

- Product subtotal = Product price × Quantity.
- Estimated total = Sum of all product subtotals.

These values will be calculated using JavaScript rather than permanently stored.

### Local Storage

The application will use the following storage key:

```javascript
"zonmaxsignQuote"
```

Local Storage will save:
- Selected product IDs.
- Product quantities.

When the application opens, JavaScript will check for previously saved information and restore the quote list.

When the user clears the quote list, the saved information will also be removed.

## 5. Organizing Application Code

### Planned JavaScript Files

| File | Responsibility |
|---|---|
| products.js | Store product information. |
| app.js | Handle product display and category filtering. |
| quote.js | Handle quote list actions, calculations, and Local Storage. |

### Planned Functions

Function | Responsibility 

displayProducts() | Display all products on the page. 
filterProducts() | Filter products by category. 
addToQuote() | Add a product or increase its quantity. 
displayQuote() | Display selected products and quantities. 
updateQuantity() | Increase or decrease a product quantity. 
removeFromQuote() | Remove a product from the quote list. 
calculateTotal() | Calculate the estimated total price. 
saveQuote() | Save the quote list to Local Storage. 
loadQuote() | Restore previously saved selections. 
clearQuote() | Clear the quote list and saved information. 

### User Interaction Flow

The application will follow this process:

**User action - DOM event - Update JavaScript data - Update the page - Save to Local Storage.**

Example: Adding a product.

1. User clicks Add to Quote.
2. JavaScript detects the click event.
3. The application checks whether the product is already in the quote list.
4. The product is added or its quantity increases.
5. The quote list and estimated total are updated.
6. The updated quote list is saved to Local Storage.

### Application Startup

When the application first loads:

1. Load the product information.
2. Check Local Storage for saved quote information.
3. Restore the previous quote list if available.
4. Display the products and quote list.
5. Calculate and display the estimated total.

### Required JavaScript Concepts

| Concept | How It Will Be Used |
|---|---|
| Variables | Store products, quote selections, and totals. |
| Objects | Store individual product information. |
| Arrays | Store products and quote list items. |
| Functions | Handle product display, filtering, and quote actions. |
| Logic | Check categories, quantities, and existing products. |
| DOM Updates | Display products, messages, and updated totals. |
| DOM Events | Handle button clicks and user interactions. |
| Local Storage | Save and restore the quote list. |

## 6. Planning the Build Order

Development will be completed in the following order:

| Step | Task | Completion Check |

| 1 | Set up project files. | HTML, CSS, and JavaScript files are organized. |
| 2 | Create product data. | Products contain all required information. |
| 3 | Display products. | Product cards appear correctly. |
| 4 | Add category filtering. | Each category displays the correct products. |
| 5 | Add products to quote list. | Products appear with quantity 1. |
| 6 | Manage quantities. | Increase and decrease buttons work. |
| 7 | Add remove functionality. | Products can be removed. |
| 8 | Calculate totals. | Prices update when quantities change. |
| 9 | Add Local Storage. | Quote list remains after refreshing. |
| 10 | Add clear functionality. | Quote list and saved data are removed. |
| 11 | Test and fix errors. | All required interactions work correctly. |
| 12 | Complete documentation. | README and planning documents are ready. |

**Milestone 3:** Focus on building the interface and styling the application.

**Final submission:** Complete JavaScript functionality, test all required features, and publish the finished application.

## 7. Acceptance and Testing Plan

The following tests will be used to check whether the application meets the client's requirements.

| Feature | Test Action | Expected Result |

| F1 | Open the application. | All products appear. |
| F1 | View a product without an image. | A placeholder appears. |
| F2 | Select Acrylic. | Only acrylic products appear. |
| F2 | Select All Products. | All products appear. |
| F3 | Add a product. | Product appears with quantity 1. |
| F3 | Add the same product twice. | Quantity increases instead of creating duplicates. |
| F4 | Increase quantity. | Subtotal and total increase. |
| F4 | Decrease quantity. | Subtotal and total decrease. |
| F4 | Try to decrease quantity below 1. | Quantity stays at 1. |
| F4 | Remove a product. | Product disappears and total updates. |
| F5 | Refresh the page. | Previously saved products remain. |
| F5 | Clear the quote list. | Confirmation appears before clearing. |
| F5 | Refresh after clearing. | Quote list remains empty. |

### Additional Testing

- Test the application on desktop and mobile screens.
- Test navigation using a keyboard.
- Check that buttons have clear labels.
- Check that empty states and error messages display correctly.
- Test adding and removing multiple products.
- Test that totals remain accurate after repeated actions.

These are planned tests and will be completed during development.

## 8. Communication and Decisions

The developer will communicate with the client to confirm any unclear requirements.

A communication log will record:
- Date and time of contact.
- Questions asked.
- Client responses.
- Decisions made.
- Reasons for decisions.

If the client does not respond within 24 hours of a clarification question, a reasonable decision will be made and documented.

If the client does not respond within 48 hours of the first contact attempt, the instructor will be contacted with the outreach record and outstanding questions.

Any major changes to the project scope will be discussed with the instructor.

---

## Final Project Goal

The finished ZonMaxSign application will allow customers to browse signage products, filter by category, create a quote list, manage quantities, and view an estimated total price.

The application will save customer selections using Local Storage and provide a responsive, accessible, and easy-to-use experience on desktop and mobile devices.