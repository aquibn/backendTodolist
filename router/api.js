const express = require('express');
const todolistModule= require('../model/todolist')
const router=express.Router();

router.get('/', function(req, res){
    res.send({type:'post'})
});

router.post('/', function(req, res){
  todolistModule.create(req.body);
    res.send('d55')

})







module.exports =router;