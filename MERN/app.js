const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose =  require('mongoose')
const studentRoute = require('./Route/route')

app.use(cors());
app.use(bodyParser.json());

app.use('/student', studentRoute)
//geting connecton form database
const dbConnection = function dbConnection () {
    mongoose.connect('mongodb+srv://admin:admin@cluster0.9jw6s.mongodb.net/?retryWrites=true&w=majority', ()=>{
        console.log('Successfully Connected to mongoDB!')
    }).catch(e => console.log(e))
}

dbConnection ();

app.listen(4000);