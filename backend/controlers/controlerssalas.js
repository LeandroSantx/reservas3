const Salas = require('../models/modelsalas')

exports.getSala =async (req, res) => {
  try {
    const sala = await Salas.modelSalas.find();
    res.json(sala);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getoneSala = async (req, res) => {   
  try {;
    res.status(201).json(await Salas.modelSalas.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createSala =async (req, res) => {
  const sala = new Salas.modelSalas({
    nome      : req.body.nome,
    tipo      : req.body.tipo,
    capacidade: req.body.capacidade,
    valor     : req.body.valor,
    img       : req.body.img,
    descricao : req.body.descricao,
    numero    : req.body.numero
  });
  try {
    const newSala = await sala.save();
    res.status(201).json(newSala);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateSala = async (req, res) => {
  try {;
    res.status(201).json(await Salas.modelSalas.findByIdAndUpdate(req.params.id,req.body));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteSala = async (req, res) => {
  try {;
    res.status(201).json(await Salas.modelSalas.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};