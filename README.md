# Bulk Vegetable/Fruit Ordering Platform

## Overview

This project is a **Bulk Vegetable/Fruit Ordering Platform** where **buyers** can browse available products, place bulk orders, and track their order status. **Admins** can manage orders and inventory. The platform uses a full-stack approach with React.js for the frontend and Express.js for the backend, along with PostgreSQL for the database.
Live-demo: https://order-fv.vercel.app/
## Features

### For Buyers:
1. **Browse Vegetables/Fruits:**
   - Display a catalog of vegetables and fruits with basic details like name and price per unit.
   - No stock tracking is required (assume all items are available).

2. **Place Orders:**
   - Buyers can place bulk orders by specifying the vegetable/fruit, the desired quantity, and delivery details (name, contact information, and address).
   - Orders should be saved with a unique identifier.

3. **Order Tracking:**
   - Buyers can track the status of their orders:
     - **Pending**: Order has been received.
     - **In Progress**: Order is being processed for delivery.
     - **Delivered**: Order has been delivered.

### For Admins:
1. **Order Management:**
   - Admins can view all placed orders with details about the buyer, delivery address, and ordered items.
   - Admins can update the status of the order (Pending → In Progress → Delivered).

2. **Inventory Management:**
   - Admins can add, edit, or remove vegetables/fruits from the catalog.
   - No stock tracking is required (assume all products are always available).

## Tech Stack

- **Frontend:** React.js (or Next.js)
- **Backend:** Express.js (or Flask) for API routes
- **Database:** PostgreSQL (hosted on Neon.tech or Dockerized Postgres)
- **UI Styling:** TailwindCSS (for clean and responsive design)
- **Authentication:** Optional (can be added later for admin login)

## Database Schema

1. **Products Table (for inventory):**
   - `id` (Primary Key)
   - `name` (String)
   - `price_per_unit` (Decimal)

2. **Orders Table (for buyers):**
   - `id` (Primary Key)
   - `name` (String)
   - `contact` (String)
   - `delivery_address` (String)
   - `status` (Enum: Pending, In Progress, Delivered)

3. **Order Items Table (linking orders with products):**
   - `id` (Primary Key)
   - `order_id` (Foreign Key)
   - `product_id` (Foreign Key)
   - `quantity` (Integer)

## API Routes Overview

| Method | Endpoint                          | Description                                             |
|--------|-----------------------------------|---------------------------------------------------------|
| GET    | `/api/products`                   | Get all available products                             |
| POST   | `/api/orders`                     | Place a new order (Buyer)                              |
| GET    | `/api/orders/:id`                 | Track an order by ID (Buyer)                           |
| GET    | `/api/orders`                     | Get all orders (Admin)                                 |
| PUT    | `/api/orders/:id/status`          | Update order status (Admin)                            |
| POST   | `/api/products`                   | Add a new product (Admin)                              |
| PUT    | `/api/products/:id`               | Edit an existing product (Admin)                       |
| DELETE | `/api/products/:id`               | Delete a product (Admin)                               |

## Frontend Pages

1. **Product Catalog Page:**
   - Display a list of vegetables/fruits with their names and prices.
   - Implement pagination or filtering if necessary.

2. **Order Placement Form:**
   - A form that lets the buyer select a vegetable/fruit, specify the quantity, and provide their delivery information.
   - On form submission, send a POST request to save the order.

3. **Order Tracking Page:**
   - Allow buyers to check the status of their orders by entering an order ID.
   - Display the current status of the order.

4. **Admin Dashboard:**
   - A page where admins can see all orders.
   - Ability to update order status (from Pending to In Progress to Delivered).
   - Admin can also manage the product catalog (add, edit, remove items).

## Backend (API Routes)

1. **Product Catalog API:**
   - **GET** `/api/products`: Fetch the list of all available products.
  
2. **Order Placement API:**
   - **POST** `/api/orders`: Place a new order with the specified items and buyer information.
  
3. **Order Tracking API:**
   - **GET** `/api/orders/:id`: Track the status of an order by its unique ID.

4. **Admin Order Management API:**
   - **GET** `/api/orders`: Fetch all orders with buyer and delivery details.
   - **PUT** `/api/orders/:id/status`: Update the status of an order (Pending → In Progress → Delivered).

5. **Admin Inventory Management API:**
   - **POST** `/api/products`: Add a new product.
   - **PUT** `/api/products/:id`: Edit an existing product.
   - **DELETE** `/api/products/:id`: Delete a product.

## Installation

### Prerequisites

- Node.js and npm (or yarn) installed
- PostgreSQL database running (use Neon.tech or Docker for hosting)
- Git for version control

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bulk-ordering-platform.git
