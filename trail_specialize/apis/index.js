const express = require('express')

const app = express()

app.listen('3000')

//app.route('/').get((req, res) => res.send('hello world'))
//app.route('/about').get((req, res) => res.send('about'))

app.use(express.json())

//app.route('/').post((req, res) => res.send(req.body))

//let author = "Felipe"

/*app.route('/').get((req, res) => res.send(author)) 

app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)
}) */

/*app.route("/:identifier").delete((req, res) => {
    res.send(req.params.identifier)
}) */

/*app.route('/').get((req, res) => res.send(req.query.name))

app.route('/').post((req, res) => res.send(req.body))

app.route('/:param').get((req, res) => res.send(req.params.param)) */

/*app.route('/').post((req, res) => {
    const {name, city, bookmark_books} = req.body
    res.send(`O meu nome é ${name}, a minha cidade é ${city} e os meus livros favoritos são ${bookmark_books}`)
})*/

/*app.route('/').get((req, res) => res.send("Hello there"))

app.route('/:variable').get((req, res) => res.send(req.params.variable))

app.route('/identity/:name').get((req, res) => res.send(req.params.name))*/

app.route('/').get((req, res) => res.send(req.query.name))

app.route('/about/user').get((req, res) => res.send(req.query))