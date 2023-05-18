const express = require('express');
const router = express.Router();
const clienteController = require('../controlers/controlersclientes')

router.get('/', clienteController.getCliente);
router.post('/', clienteController.createCliente);
router.get('/:id', clienteController.getoneCliente);
router.get('/cpf/:cpf', clienteController.getClienteByCPF); // Rota adicionada
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;