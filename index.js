const express = require('express');
const request = require('request-promise');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = process.env.API_KEY;
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}`;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the LTH-33 Amazon Scraper API');
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
