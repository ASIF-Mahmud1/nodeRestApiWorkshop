
const assert = require('assert');

const express = require('express');
const app = express();
const url = 'mongodb://localhost:27017/noderestapidb';
const articleRoute = require("./route/article-route.js");

const mongoose = require('mongoose');
mongoose.connect(url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  articleRoute(app);


  app.listen(3000, () => console.log('Example app listening on port 3000!'))
});
app.use(express.json());




// Database Name
;

// Use connect method to connect to the server

