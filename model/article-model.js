// module.exports = function(db){


//     function createArticle(){
//         console.log("createArticle");

//     }

//     function updateArticle(){

//     }

//     function deleteArticle(){

//     }

//     function getArticle(){

//     }

//     return {
//         createArticle:createArticle,
//         updateArticle:updateArticle,
//         deleteArticle:deleteArticle,
//         getArticle:getArticle
//     }


// }

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'noderestapidb';



module.exports = {
    createArticle: function (article, callback) {


        MongoClient.connect(url, function(err, client) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
          
            const db = client.db(dbName);
            const collection = db.collection('articles');
            // Insert some documents
            collection.insert(article, function (err, result) {
                assert.equal(err, null);
                assert.equal(1, result.result.n);
        
              
                callback(result);
                client.close();
            });
          
        
          });
        
    
    }


}

