const express = require('express');
const router = express.Router();
const salaController = require('../controlers/controlerssalas');

router.get('/', salaController.getSala);
router.post('/', salaController.createSala);
router.get('/:id', salaController.getoneSala);
router.put('/:id', salaController.updateSala);
router.delete('/:id', salaController.deleteSala);

module.exports = router;