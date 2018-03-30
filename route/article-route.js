
const Article = require("./../model/article-model.js");
module.exports = function (app) {


    app.post('/article/createArticle', function (req, res) {

        var article = new Article(req.body);
        article.save(function (err, result) {
            if (err) res.status(400).send({ error: err });
            else {
                res.status(200).send(result);
            }
        });


    })

    app.get('/article/allArticle', function (req, res) {
        Article.find(function (err, result) {
            if (err) res.status(400).send({ error: err });
            else
                res.status(200).send(result);

        })
    })

    app.get('/article/:id', function (req, res) {

        Article.findById(req.params.id, function (err, article) {
            if (err) res.status(400).send({ error: err });
            res.status(200).send(article);
        });

    })


    app.put('/article/:id', function (req, res) {

        Article.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, article) {
            if (err) res.status(400).send({ error: err });
            res.status(200).send(article);
        });

    })

    app.delete('/article/:id', function (req, res) {

        Article.findByIdAndRemove(req.params.id, function (err, result) {

            if (err) res.status(400).send({ error: err });
            res.status(200).send(result);
        });

    })

    app.get('/', function (req, res) {
        res.send("Rest API For the Blog. Use a rest api client to test it.")
    })


}