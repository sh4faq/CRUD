const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Root route
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and PostgreSQL API' });
});

// API routes
app.get('/merchants', db.getMerchants);
app.get('/merchants/:id', db.getMerchantById);
app.post('/merchants', db.createMerchant);
app.put('/merchants/:id', db.updateMerchant);
app.delete('/merchants/:id', db.deleteMerchant);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});