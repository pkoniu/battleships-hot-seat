'use strict'

let express = require('express');
let handler = require('./handler')

module.exports = (redis) => {
  let app = express();

  app.get('/', handler);

  return app;
}
