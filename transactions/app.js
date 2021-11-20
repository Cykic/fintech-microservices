const express = require('express');

const tourController = require('./src/transactionsController');
const AppError = require('./error/AppError');
const errorController = require('./error/errorController');

//Start express app
const app = express();

// ROUTES
app.get('/api/v1/transactions', tourController.getAllTransaction);
app.get('/api/v1/transactions/create', tourController.create);

//404 Route
app.use('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorController);

module.exports = app;
