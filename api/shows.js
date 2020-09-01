const express = require('express');
const { getShows, getShow } = require('../controllers/shows');

const api = express.Router();

api.route('/').get(getShows);

api.route('/:id').get(getShow);

module.exports = api;
