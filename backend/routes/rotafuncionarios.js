const express = require('express');
const router = express.Router();
const funcionariosController = require('../controlers/controlersfuncionarios');

router.get('/', funcionariosController.getFuncionario);
router.post('/', funcionariosController.createFuncionario);
router.get('/:id', funcionariosController.getoneFuncionario);
router.put('/:id', funcionariosController.updateFuncionario);
router.delete('/:id', funcionariosController.deleteFuncionario);

module.exports = router;