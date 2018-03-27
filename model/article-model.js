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
const assert = require('assert');


module.exports = {
    createArticle: function (db,article, callback) {
        const collection = db.collection('articles');
        // Insert some documents
        collection.insert(article, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
    
            console.log("Inserted 3 documents into the collection");
            callback(result);
        });
    }


}

