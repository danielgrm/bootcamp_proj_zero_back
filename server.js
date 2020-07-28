const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
    console.log('Middleaware')
    next()
})


app.get('/', (req, res) => {
    res.send('<h1>Hello World da prof. Thais</h1>')
})

app.get('/outra-coisa', (req, res) => {
    let number = Math.random()
    number = Math.trunc(number * 10)
    res.send(`Outra tela ${number}`)
})


app.listen(port, () => { console.log(`oi`) })