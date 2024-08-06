const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const colors = require('colors');
const insertMockData = require('./insertMockData');
const MockData = require('./models/MockData');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', async () => {
  console.log(colors.green('MongoDB database connection established successfully'));

  try {
    await insertMockData();
  } catch (err) {
    console.error(err);
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the React Admin Dashboard!');
});

app.get('/api/lineChartMockData', async (req, res) => {
  try {
    const data = await MockData.find({})
    res.json(data);
  } catch (err) {
    console.error('Error fetching data from MongoDB:', err.message);
    res.status(500).send('Error fetching data from MongoDB');
  }
});

app.listen(port, () => {
  console.log(colors.blue(`Server is running on port: ${port}`));
});
