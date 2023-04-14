const mongoose = require('mongoose');
 
mongoose.connect('mongodb://127.0.0.1:27017/reservas');

//Define a schema
var Schema = mongoose.Schema;

//Define modelo
var Model = mongoose.model;



  var clientes = new Schema(
    {
     cpf : {type:Number, required: true},
     nome : {type:String, required: true},
     cep: {type:Number, required: true},
     tel: {type:Number, required: true},
     email: {type:String, required: true}
    })

    const modelsClient = Model('clientes', clientes);


module.exports = {modelsClient};