
const assert = require('assert');

const express = require('express');
const app = express();
const url = 'mongodb://localhost:27017/noderestapidb';
const articleRoute = require("./route/article-route.js");
const cors = require('cors')
const mongoose = require('mongoose');
mongoose.connect(url);
app.use(express.json());
app.use(cors());
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  articleRoute(app);

  app.listen(3000, () => console.log('Example app listening on port 3000!'))
});




