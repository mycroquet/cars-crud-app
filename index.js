const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const knex = require('./db/knex');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

app.get('/garage', function(req, res) {
    knex('garage').then(function(result) {
        res.json(result)
    })
})
app.post('/garage', function(req, res, next) {
    knex('garage').insert({
        year: req.body.year,
        make: req.body.make,
        model: req.body.model
    }, '*').then(function(result) {
        res.json(result)
    });
})
