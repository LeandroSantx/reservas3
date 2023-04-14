const mongoose = require('mongoose');
 
mongoose.connect('mongodb://127.0.0.1:27017/reservas');

//Define a schema
var Schema = mongoose.Schema;

//Define modelo
var Model = mongoose.model;


  var salas = new Schema(
    {
     nome: String,
     tipo: String,
     capacidade: Number,
     valor: Number,
     img: String,
     descricao: String,
     numero: Number
    })

    const modelSalas = Model('salas', salas);
  
module.exports = {modelSalas};