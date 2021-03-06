const morgan = require('morgan');
// const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
// const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const express = require('express');

function middleware(app) {
  app.enable('trust proxy');

  app.enable('trust proxy');

  //GLOBAL MIDDLEWARES
  // Implement CORS
  app.use(cors()); // Access-Control-Allow-Origin * ('*' means all the requests no matter where they are coming from)

  app.options('*', cors());

  //Set security HTTP headers. NOTE: Always use for all ur express applications!
  app.use(helmet());

  //Development logging
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  //Limit requests from the same API
  // const limiter = rateLimit({
  //   max: 100, //100 request per hour
  //   windowMs: 60 * 60 * 1000, //1 hour in milliseconds
  //   message: 'Too many request from this IP, please try again in an hour!'
  // });
  // app.use('/api', limiter);

  //Body parser. Reading data from the body into req.body
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));
  app.use(cookieParser());

  //Data sanitization against NoSQL query injection
  app.use(mongoSanitize());

  //Data sanitization XSS(cross-site scripting)
  app.use(xss());

  //Compress all the texts that is sent to clients
  app.use(compression());
}

module.exports = middleware;
