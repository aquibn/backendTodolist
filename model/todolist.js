const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const todoschema= new Schema({
  data:{
      type: 'string',
      required: [true,'data required']
  }
})

const todolistModule = mongoose.model('todolist', todoschema);
module.exports = todolistModule;