// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// set up the Express App
var app = express();
var PORT = process.env.PORT || 8000;

// set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Router
require('./app/routes/api-routes.js')(app); 
require('./app/routes/html-routes.js')(app);

//Listener
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});
