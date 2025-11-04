# CRUD REST API with Node.js, Express, and PostgreSQL

A simple CRUD (Create, Read, Update, Delete) REST API built with Node.js, Express, and PostgreSQL following the [LogRocket tutorial](https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/).

## Features

- RESTful API endpoints for merchant management
- PostgreSQL database integration
- Environment variable configuration for security
- Express server with body-parser middleware

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL installed and running
- npm or yarn package manager

## Installation

### 1. Install PostgreSQL

Follow the instructions at: https://neon.com/postgresql/postgresql-getting-started/install-postgresql

### 2. Clone and Setup Project

```bash
cd C:\Users\hamze\Desktop\vscode-projects\CRUD
npm install
```

### 3. Configure Database

1. Start PostgreSQL and access the PostgreSQL shell:
```bash
psql postgres
```

2. Create a new database:
```sql
CREATE DATABASE api;
```

3. Connect to the database:
```sql
\c api
```

4. Create the merchants table:
```sql
CREATE TABLE merchants (
  ID SERIAL PRIMARY KEY,
  merchant_name VARCHAR(30),
  country VARCHAR(30)
);
```

5. Insert sample data (optional):
```sql
INSERT INTO merchants (merchant_name, country)
VALUES ('Walmart', 'United States'),
       ('Carrefour', 'France'),
       ('Tesco', 'United Kingdom');
```

6. Exit PostgreSQL:
```sql
\q
```

### 4. Configure Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit the `.env` file with your PostgreSQL credentials:
```
DB_USER=your_postgres_username
DB_HOST=localhost
DB_DATABASE=api
DB_PASSWORD=your_postgres_password
DB_PORT=5432
```

**IMPORTANT**: The `.env` file contains sensitive credentials and is already listed in `.gitignore` to prevent it from being committed to GitHub.

## Running the Application

Start the server:
```bash
npm start
```

The server will start on `http://localhost:3001`

## API Endpoints

### Get all merchants
```
GET http://localhost:3001/merchants
```

### Get a single merchant by ID
```
GET http://localhost:3001/merchants/:id
```

### Create a new merchant
```
POST http://localhost:3001/merchants
Content-Type: application/json

{
  "merchant_name": "Amazon",
  "country": "United States"
}
```

### Update a merchant
```
PUT http://localhost:3001/merchants/:id
Content-Type: application/json

{
  "merchant_name": "Amazon Updated",
  "country": "USA"
}
```

### Delete a merchant
```
DELETE http://localhost:3001/merchants/:id
```

## Testing the API

You can test the API using:
- **cURL** commands from terminal
- **Postman** - popular API testing tool
- **Thunder Client** - VS Code extension
- **REST Client** - VS Code extension

### Example cURL Commands

```bash
# Get all merchants
curl http://localhost:3001/merchants

# Get merchant by ID
curl http://localhost:3001/merchants/1

# Create new merchant
curl -X POST http://localhost:3001/merchants \
  -H "Content-Type: application/json" \
  -d "{\"merchant_name\":\"Amazon\",\"country\":\"United States\"}"

# Update merchant
curl -X PUT http://localhost:3001/merchants/1 \
  -H "Content-Type: application/json" \
  -d "{\"merchant_name\":\"Amazon Updated\",\"country\":\"USA\"}"

# Delete merchant
curl -X DELETE http://localhost:3001/merchants/1
```

## Project Structure

```
CRUD/
├── node_modules/          # Dependencies (not committed)
├── .env                   # Environment variables (not committed)
├── .env.example           # Example environment variables
├── .gitignore            # Git ignore file
├── index.js              # Express server and routes
├── queries.js            # Database queries and CRUD operations
├── package.json          # Project metadata and dependencies
└── README.md             # This file
```

## Security Features

- **Environment Variables**: Database credentials are stored in `.env` file (not committed to Git)
- **.gitignore**: Prevents sensitive files from being committed
- **.env.example**: Provides template without actual credentials

## How .env Works

The `queries.js` file uses the `dotenv` package to load environment variables:

```javascript
require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.DB_USER,        // Loaded from .env
  host: process.env.DB_HOST,        // Loaded from .env
  database: process.env.DB_DATABASE, // Loaded from .env
  password: process.env.DB_PASSWORD, // Loaded from .env
  port: process.env.DB_PORT,        // Loaded from .env
});
```

This keeps your credentials secure and separate from your code!

## Dependencies

- **express**: Web framework for Node.js
- **pg**: PostgreSQL client for Node.js
- **dotenv**: Loads environment variables from .env file
- **body-parser**: Parse incoming request bodies

## License

ISC

## Tutorial Reference

This project follows the tutorial from LogRocket:
https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/