const express = require('express');
const { getTours, getTour } = require('../controllers/tours');

const api = express.Router();

api.route('/').get(getTours);

api.route('/:id').get(getTour);

module.exports = api;
