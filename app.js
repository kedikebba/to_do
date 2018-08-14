const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config/database')
const port = 9393;
var app = express();

mongoose.connect(config.database)

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const to_do = require('./controllers/to_do')
app.use('/to_do', to_do)



app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.send("Invalid Page")
})

app.listen(port, function(){
    console.log("The Server is UP and Running on Port: "+port)
})
