require('dotenv').config();
const express = require('express');
const app = express();

const tours = require('./api/tours');
const errorHandler = require('./middleware/error');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', tours);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 server running on port ${PORT}`);
});
