require('dotenv').config();
const express = require('express');
const app = express();

const tours = require('./api/tours');
const shows = require('./api/shows');
const errorHandler = require('./middleware/error');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/tours', tours);
app.use('/shows', shows);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 server running on port ${PORT}`);
});
