# MTM6302 – Milestone 1: Client Project Brief

**Developer Name:** Sam Tyrie
**Project Title:** ZonMaxSign – Sign Product & Quote Planner

---

## 1. Project Identity and Purpose

ZonMaxSign is a sign and display product business that offers a variety of signage solutions for businesses, shops, and events.

The **Sign Product & Quote Planner** is designed for small business owners, shop owners, and individuals who need signage for their businesses or events.

The purpose of this application is to help customers explore available sign products, compare prices, and create a personalized quote list before contacting the business.

Users should be able to browse products, select the quantities they need, and view an estimated total price in one convenient location.

## 2. Main Features and Priorities

### Required Features

**F1 – Browse Sign Products**
- Display available sign products.
- Show product names, images, descriptions, categories, sizes, and prices.

**F2 – Filter Products**
- Allow users to filter products by category.
- Available categories include Acrylic, LED, and Display.
- Include an option to view all products.

**F3 – Add Products to Quote List**
- Allow users to add products to their quote list.
- Display selected products and their quantities.

**F4 – Manage Quote List**
- Allow users to increase or decrease product quantities.
- Allow users to remove products.
- Automatically update the estimated total price.

**F5 – Save Quote List**
- Automatically save selected products and quantities.
- Remember the quote list after refreshing or reopening the page.
- Allow users to clear their entire quote list.

### Optional Features
- A search bar to find products by name.
- A project note field where customers can describe their signage needs.

### Out of Scope

The application will not include:
- User accounts or registration.
- Online payments.
- Real-time ordering.
- Delivery tracking.
- An administration dashboard.

The application will not process actual orders or payments. All displayed prices are examples intended for planning purposes only.

## 3. What Happens When Someone Uses It

### F1 – Browse Sign Products

When users open the application, they should see a catalogue of available sign products.

Each product should display:
- Product name.
- Product image.
- Price.
- Category.
- Size.
- Short description.

**Example products:**

| Product | Price |
|---|---:|
| Clear Acrylic Sign | $89 |
| LED Light Sign | $199 |
| Floor Display Sign | $149 |

Users can select a product to view its information.

If a product does not have an image, the application should display a simple placeholder instead.

### F2 – Filter Products

Users should be able to select a category to view specific products.

**Available categories:**
- All Products
- Acrylic
- LED
- Display

The product catalogue should automatically update when a category is selected.

If no products match the selected category, display a message such as:

"No products found in this category."

### F3 – Add Products to Quote List

Users can click the **Add to Quote** button on any product.

When a product is added:
- The product should appear in the quote list.
- The default quantity should be 1.
- If the same product is added again, its quantity should increase by 1 instead of creating a duplicate entry.
- A confirmation message should appear when the product is successfully added.

### F4 – Manage Quote List

Users should be able to:
- Increase or decrease the quantity of each product.
- Remove individual products using a Remove button.
- View updated product subtotals and the estimated total price.

The minimum quantity for each product is 1.

The application should automatically recalculate the subtotal and estimated total whenever quantities change or products are removed.

If the quote list is empty, display:

"Your quote list is empty. Start by exploring our products."

### F5 – Save Quote List

The application should automatically save the quote list whenever users add, remove, or update products.

When users refresh or reopen the page, their previously selected products and quantities should still appear.

Users should also have the option to click **Clear Quote List** to remove all selected products.

Before clearing the list:
- Display a confirmation message.
- Prevent accidental removal of saved selections.

After confirmation, the quote list should be cleared and display the empty-state message.

The quote list should remain empty even after refreshing the page.

## 4. Information the App Needs and Remembers

The application requires product information and customer selections to function correctly.

### Product Information

Each product should include:
- Product name.
- Product image.
- Short description.
- Category.
- Size.
- Price.

**Example product information:**

| Product | Category | Size | Price |
|---|---|---|---:|
| Clear Acrylic Sign | Acrylic | Medium | $89 |
| LED Light Sign | LED | Small | $199 |
| Floor Display Sign | Display | Large | $149 |

These sample products and prices are provided by the client and should appear when users first open the application.

### Customer Information

The application should remember:
- Selected products.
- Product quantities.
- Estimated subtotal.

Customers do not need to create an account or provide personal information.

**Where the information comes from:**
- Product information is provided by the client.
- Selected products and quantities are provided by the user.

The application should automatically save changes. After refreshing the page, users should see their previously saved quote list.

When users select **Clear Quote List**, all saved product selections should be removed.

A first-time user should see the complete product catalogue and an empty quote list.

## 5. What Users See

### Main Page Layout

The application should contain the following sections:

1. **Header:** Display the ZonMaxSign business name and a simple navigation area.
2. **Welcome Section:** Introduce the application with a message such as "Find the Right Sign for Your Business."
3. **Product Categories:** Allow users to filter products by category.
4. **Product Catalogue:** Display product images, names, descriptions, prices, and Add to Quote buttons.
5. **Quote List:** Display selected products, quantities, individual prices, and the estimated total.

### Visual Preferences

The design should follow the ZonMaxSign brand identity.

| Design Element | Specification |
|---|---|
| Primary Colour | Dark Blue `#172B4D` |
| Secondary Colour | Orange `#FF8A35` |
| Background | White `#FFFFFF` |
| Secondary Background | Light Grey `#F4F6F8` |
| Font | Poppins |

The overall design should look clean, modern, and professional.

Product images should be clear, consistent, and easy to view.

### Responsive Design and Accessibility

The application should work on both desktop computers and mobile devices.

**Desktop:**
- Display products in multiple columns.
- Use the available screen space effectively.

**Mobile:**
- Display products in a single column.
- Ensure buttons and content fit smaller screens.
- Keep navigation simple and easy to use.

**Accessibility requirements:**
- All buttons and form controls should have clear labels.
- Text should be easy to read.
- Users should be able to navigate the application using a keyboard.
- Interactive elements should be easy to identify and use.

### Messages and Feedback

The application should provide clear feedback when users interact with it.

| Situation | Expected Behaviour |
|---|---|
| First visit | Display the product catalogue and an empty quote list. |
| No available products | Show a clear message instead of an empty product area. |
| Product added | Display a confirmation message. |
| Product removed | Update the quote list and total price. |
| Empty quote list | Display "Your quote list is empty." |
| Missing information or unsuccessful action | Show a helpful message near the related section. |
| Clearing the quote list | Ask users to confirm before removing all selections. |

The application should respond quickly to user actions and clearly communicate when information has been updated.

---

**End of Client Project Brief**