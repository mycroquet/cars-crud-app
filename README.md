/GET
```js
app.get('/garage', function(req, res) {
    knex('garage').then(function(result) {
        res.json(result)
    })

/post
app.post('/garage', function(req, res, next) {
    knex('garage').insert({
        year: req.body.year,
        make: req.body.make,
        model: req.body.model
    }, '*').then(function(result) {
        res.json(result)
    });
})
```
