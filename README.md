# Node.js REST API

A RESTful API developed with **Node.js**, **Express**, and **MySQL**. This project provides CRUD operations for managing categories stored in a MySQL database, demonstrating backend development principles, database integration, and REST API design.

## Features

* RESTful API architecture
* CRUD operations for categories
* MySQL database integration
* Asynchronous database queries using `mysql2`
* JSON request and response handling
* Error handling with appropriate HTTP status codes

## Tech Stack

* Node.js
* Express.js
* MySQL
* mysql2
* JavaScript

## API Endpoints

| Method | Endpoint          | Description                 |
| ------ | ----------------- | --------------------------- |
| GET    | `/categorias`     | Retrieve all categories     |
| GET    | `/categorias/:id` | Retrieve a category by ID   |
| POST   | `/categorias`     | Create a new category       |
| PUT    | `/categorias/:id` | Update an existing category |
| DELETE | `/categorias/:id` | Delete a category           |

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd projnodejs
```

Install the dependencies:

```bash
npm install
```

## Database Configuration

Update the MySQL connection settings inside `app.js`:

```javascript
const db = mysql.createPool({
    host: "localhost",
    user: "your_username",
    password: "your_password",
    database: "your_database"
});
```

Make sure your MySQL server is running and that the required database and tables have been created before starting the application.

## Running the Server

```bash
node app.js
```

The API will be available at:

```
http://localhost:3000
```

## Project Structure

```
projnodejs/
├── app.js
├── package.json
├── package-lock.json
└── node_modules/
```

## Learning Objectives

This project was developed to practice:

* Building REST APIs with Express
* Connecting Node.js applications to MySQL
* Performing CRUD operations
* Writing asynchronous JavaScript with async/await
* Structuring backend applications
* Handling API errors and HTTP responses

## Future Improvements

* Input validation
* Environment variables using `.env`
* Authentication and authorization
* Database migrations
* API documentation with Swagger/OpenAPI
* Unit and integration tests
* Docker support

## Author

**César Martins**

---

This project was developed for educational purposes to strengthen backend development skills using the Node.js ecosystem.
