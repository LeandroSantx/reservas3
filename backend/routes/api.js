var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/funcionarios', async function(req, res, next) {


    
    res.send( await db.findAll("funcionarios"));
  
  
  });
  
  router.get('/funcionarios/:id', async function(req, res, next) {
  
    const id = req.params.id;
    const db = require('../db');
    
    
    res.send(await db.findOne("funcionarios", id));
  
  
  });
  
  router.post('/funcionarios', async function(req,res,next) {
  
    const funcionario = req.body;
  
    console.log(funcionario);
  
    
  
    res.send(await db.insert("funcionarios",funcionario));
  
  })
  
  router.put('/funcionarios/:id', async (req,res,next)=>{

    const id = req.params.id;
    const funcionario = req.body;
    
    
  
    res.send(await db.updateOne('funcionarios', id, funcionario));
  
  })
  
  router.delete('/funcionario/apagar/:id', async function(req,res,next) {
  
    const funcionario = req.params.id;
  
    console.log(funcionario);
  
    
  
    res.send(await db.deleteDb("funcionarios",funcionario));
  
  })
  
  
  router.get('/clientes', async function(req, res, next) {
  
   
    res.send(await db.findAll("clientes"))
  
  
  });
  
  router.get('/clientes/:id', async function(req, res, next) {
  
    const id = req.params.id;
  
    res.send(await db.findOne("clientes", id))
  
  
  });
  
  router.post('/clientes', async function(req,res,next) {
    
    const cliente = req.body;
  
    //console.log(cliente);
  
    
    
    res.send(await db.insert("clientes", cliente));
  
  })
  
  router.put('/clientes/:id', async (req,res,next)=>{

    const id = req.params.id;
    const cliente = req.body;
    
    
  
    res.send(await db.updateOne('clientes', id, cliente));
  
  })
  
  router.delete('/clientes/apagar/:id', async function(req,res,next) {
  
    const cliente = req.params.id;

    res.send(await db.deleteDb("clientes",cliente));
  
  })


  //api salas

  router.get('/salas', async function(req, res, next) {
  
   
    res.send(await db.findAll("salas"))
  
  
  });

  router.get('/salas/:id', async function(req, res, next) {
  
    const id = req.params.id;
  
    res.send(await db.findOne("salas", id))
  
   
  });

  // POST salas. */
router.post('/salas', async (req, res, next) => {
  try {  
      res.send(await db.insert('salas',req.body));        
  } catch (err) { 
    next(err);
   }
  })
  
  // PUT salas. */
  router.put('/salas/:id', async (req, res, next) => {
  const id = req.params.id;
  
  try {
    res.send(await db.updateDb('salas',id, req.body));
  } catch (err) {
    next(err);
  }
  })
  
  // DEL salas. */
  router.delete('/salas/:id', async (req, res, next) => {
    const id = req.params.id;
  
    try {
      res.send(await db.deleteDb('salas',id));
    } catch (err) {
      next(err);
    }
  })

  
module.exports = router;
