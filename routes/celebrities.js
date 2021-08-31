const express = require('express');
const Celebrity = require('../models/celebrity');

const celebrityRoute = express.Router();

celebrityRoute.get('/celebrities', (request, response, next) => {
  Celebrity.find()
    .then((celebrities) => {
      response.render('index', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = celebrityRoute;
