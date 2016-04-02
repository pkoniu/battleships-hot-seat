'use strict';

let express = require('express');
let routes = require('./routes');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let cons = require('consolidate');
let path = require('path');
let logger = require('morgan');

module.exports = (redis) => {
  let app = express();

  app.engine('mustache', cons.mustache);
  app.set('view engine', 'mustache');
  app.set('views', path.join(__dirname,'./../views'));

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, './../public')));

  app.get('/', routes.welcome);
  app.get('/game', routes.game);
  app.post('/login', routes.registration);

  return app;
};
