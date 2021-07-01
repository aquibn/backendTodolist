const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aquibn:hUk29!epR_927wq@cluster0.ktxkh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;


app.use(bodyparser.json());

app.use('/todolist',require('./router/api'));

app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});


app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});

