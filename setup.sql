-- Create the database
CREATE DATABASE api;

-- Connect to the database
\c api

-- Create the merchants table
CREATE TABLE merchants (
  ID SERIAL PRIMARY KEY,
  merchant_name VARCHAR(30),
  country VARCHAR(30)
);

-- Insert sample data
INSERT INTO merchants (merchant_name, country)
VALUES ('Walmart', 'United States'),
       ('Carrefour', 'France'),
       ('Tesco', 'United Kingdom');

-- Verify the data
SELECT * FROM merchants;