const express = require('express');
const request = require('request-promise');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = process.env.API_KEY;
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the LTH-33 Amazon Scraper API');
});

// GET Product Details
app.get('/products/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(
      `${baseUrl}&url=https://www.amazon.com/dp/${productId}`); 
      res.json(JSON.parse(response));
  } catch (error) {
      res.json(error)
  }
});

// GET Product Reviews
app.get('/products/:productId/reviews', async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(
      `${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`); 
      res.json(JSON.parse(response));
  } catch (error) {
      res.json(error)
  }
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
