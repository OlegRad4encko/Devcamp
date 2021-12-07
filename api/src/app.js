const express = require('express')
const app = express()

app.get('/about', function (req, res) {
    res.send('about')
})

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)