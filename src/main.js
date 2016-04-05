'use strict';

console.log("@@@@@@@", process.env.NON_SECRET_KEY);
console.log("#######", process.env.SECRET_KEY);

let app = require('./app')();

let port = process.env.PORT || 8080;

app.listen(port, () => {console.log("App running on port: ", port)});
