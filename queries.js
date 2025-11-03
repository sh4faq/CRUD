require('dotenv').config();
const Pool = require('pg').Pool;

// Database connection using environment variables
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// GET all merchants
const getMerchants = (request, response) => {
  pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// GET single merchant by id
const getMerchantById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM merchants WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// POST create new merchant
const createMerchant = (request, response) => {
  const { merchant_name, country } = request.body;

  pool.query(
    'INSERT INTO merchants (merchant_name, country) VALUES ($1, $2) RETURNING *',
    [merchant_name, country],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Merchant added with ID: ${results.rows[0].id}`);
    }
  );
};

// PUT update merchant
const updateMerchant = (request, response) => {
  const id = parseInt(request.params.id);
  const { merchant_name, country } = request.body;

  pool.query(
    'UPDATE merchants SET merchant_name = $1, country = $2 WHERE id = $3',
    [merchant_name, country, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Merchant modified with ID: ${id}`);
    }
  );
};

// DELETE merchant
const deleteMerchant = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Merchant deleted with ID: ${id}`);
  });
};

module.exports = {
  getMerchants,
  getMerchantById,
  createMerchant,
  updateMerchant,
  deleteMerchant,
};