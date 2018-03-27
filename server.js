
const assert = require('assert');

const express = require('express');
const app = express();

const articleRoute = require("./route/article-route.js");
// Connection URL


// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

articleRoute(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
// Database Name
;

// Use connect method to connect to the server

