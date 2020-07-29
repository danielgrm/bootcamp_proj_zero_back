const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000


// Init Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello World da prof. Thais</h1>')
})

app.get('/outra-coisa', (req, res, next) => {
    let number = Math.random()
    number = Math.trunc(number * 10)
    res.send(`Outra tela ${number}`)
})

app.post('/form', (req, res, next)=> {
    const {nome, email} = req.body
    if (email === undefined){
        res.send({"erros" : "cadê o email, mané?"})
    }
    else{
        console.log(`${nome}, ${email}`)
        res.send(req.body)
    }
})


app.get('/form', (req, res, next)=> {
    res.send({"a" : "a"})
})

app.listen(port, () => { console.log(`oi`) })