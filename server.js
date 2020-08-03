const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const PORT = 3000

// Init Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Define Routes
app.use('/', require('./routes/hello'))
app.use('/form', require('./routes/api/form'))
app.use('/user', require('./routes/api/user'))

app.listen(PORT, () => { console.log(`port ${PORT}`) })