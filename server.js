const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World da prof. Thais'))
app.get('/outra-coisa', (req, res) => {
    let number = Math.random()
    number = Math.trunc(number * 10)
    res.send(`Outra tela ${number}`)
})


app.listen(port, () => console.log(`app listening at http://localhost:${port}`))