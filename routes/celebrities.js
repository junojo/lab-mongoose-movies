const express = require('express');
const Celebrity = require('./../models/celebrity');

const celebrityRouter = express.Router();

celebrityRouter.get('/', (request, response, next) => {
  Celebrity.find()
    .then((celebrities) => {
      response.render('index', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

celebrityRouter.get('/:id', (request, response, next) => {
  const id = request.params.id;
  let celebrity;
  console.log('>>> hello');
  Celebrity.findById(id)
    .then((document) => {
      celebrity = document;
      response.render('celebrities/show', { celebrity });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = celebrityRouter;
