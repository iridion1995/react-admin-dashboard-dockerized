const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const colors = require('colors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log(colors.green('MongoDB database connection established successfully'));
});

app.get('/', (req, res) => {
  res.send('Welcome to the React Admin Dashboard!');
});

app.listen(port, () => {
  console.log(colors.blue(`Server is running on port: ${port}`));
});
