const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const express = require('express');
const app = express();
const article = require("./model/article-model.js");
const articleRoute = require("./route/article-route.js");
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'noderestapidb';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  


  const db = client.db(dbName);
  articleRoute(app);
  app.listen(3000, () => console.log('Example app listening on port 3000!'))
  

//   article.createArticle(db,{username:"abul",title:"title1",content: "hello wolrd",creationDate:Date.now() },function(result){

//     console.log("created succesfully");

//   });

  client.close();
});
