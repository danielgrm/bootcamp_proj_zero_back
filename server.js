const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const PORT = 3000


// Init Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get('/', (req, res, next) => {
    res.send(`hello`)
})

app.get('/outra-coisa', (req, res, next) => {
    let number = Math.random()
    number = Math.trunc(number * 10)
    res.send(`Outra tela ${number}`)
})

app.post('/form', (req, res, next)=> {
    const {name, email} = req.body

    console.log(`${JSON.stringify(req.body)}`)
    if (!email){
        res.status(400).send({"error" : "email required"})
    }
    else{
        res.send(req.body)
    }
})


app.get('/form', (req, res, next)=> {
    res.send({"a" : "a"})
})

app.listen(PORT, () => { console.log(`port ${PORT}`) })