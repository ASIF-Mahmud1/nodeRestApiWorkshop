
const article = require("./../model/article-model.js");
module.exports = function(app){

  
    app.get('/', (req, res) => res.send('Hello World!'))

    app.post('/createArticle', function (req, res) {
  
     console.log(req.body);
     article.createArticle(req.body,function(result){

        res.send('Article was created succesfully');
     });

      })

}