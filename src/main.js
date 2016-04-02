'use strict'

let app = require('./app')();

let port = process.env.PORT || 8080;

app.listen(port, () => {console.log("App running on port: ", port)});
